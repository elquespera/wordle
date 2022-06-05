import modal from "./modal";
import { currentLayout } from "./language";
import { keyboard } from "./keyboard";

import words_en from "./assets/words/words-en.json";
import words_es from "./assets/words/words-es.json";
import words_ru from "./assets/words/words-ru.json";

const words = {
    en: words_en,
    es: words_es,
    ru: words_ru
}

const wordLength = 5;
const puzzleLength = 6;

class Puzzle {
    _cardDivs = [];
    _solution;
    _currentSolution = [];
    _stats = {
        played: 20,
        dist: {
            1: 3,
            3: 7,
            4: 3,
            5: 3
        }
    }
    constructor() {
        const puzzleFrag = new DocumentFragment();
        let row = [];
        for (let i = 1; i <= wordLength * puzzleLength; i++) {
            const card = document.createElement('div');
            card.className = `card row-${Math.floor(i / puzzleLength)}`;
            puzzleFrag.appendChild(card);
            row.push(card);
            if (row.length >= wordLength) {
                this._cardDivs.push(row);
                row = [];
            }
        }
        document.querySelector('#puzzle').replaceChildren(puzzleFrag);
        this.reset();
    }

    get solution() {
        return this._solution;
    }

    // Current matrix operations
    get matrix() {
        return this._currentSolution;
    }
    get lastRowNumber() {
        return this.matrix.length-1;
    }
    get lastRow() {
        return this.matrix[this.lastRowNumber];
    }


    // Statistics
    get stats() {
        Object.keys(this._stats.dist).forEach(key => {
            this._stats.dist[key] = parseInt(this._stats.dist[key]);
        });
        return this._stats;
    }
    get wonCount() {
        return Object.values(this.stats.dist).reduce((t, v) => t + v, 0);
    }
    get maxWin() {
        return Object.values(this.stats.dist).reduce((t, v) => v > t ? v : t, 0);
    }    
    addWin(bin) {
        this.stats.dist[bin] = (this.stats.dist[bin] || 0) + 1;
    }

    // Reset & update letters
    reset() {
        this._currentSolution = [];
        this._solution = this.dict()[Math.floor(Math.random() * this.dict().length)];
        console.log(this._solution);

        this.update();
        this._cardDivs.flat().forEach(card => {
            card.classList.remove('not-present', 'present', 'correct', 'current');        
        });
        keyboard.reset();
    }

    update() {
        this._cardDivs.forEach((row, i) => row.forEach((div, j) => {
            div.innerHTML = this.matrix[i] ? this.matrix[i][j] || '' : '';
        }));
        if (this.matrix.length > 0 && this._cardDivs[this.lastRowNumber]) {
            this._cardDivs[this.lastRowNumber].forEach(card => {
                if (card.innerHTML === '') {
                    card.classList.remove('current');
                } else {
                    card.classList.add('current');
                }
            })
        }        
    }

    dict() {
        return words[currentLayout.locale];
    }

    wordExists(word) {
        return this.dict().includes(word);
    }

    async checkLetters(row) {          
        for (let i = 0; i < this.matrix[row].length; i++) {
            const letter = this.matrix[row][i];
            let className = 'not-present';
            if (this.solution.includes(letter)) {
                if (this.solution[i] === letter) {
                    className = 'correct';
                } else {
                    className = 'present';
                }
            }            
            keyboard.findKeyDiv(letter).classList.add(className);
            await revealCard(this._cardDivs[row][i]);
            this._cardDivs[row][i].classList.add(className);
            this._cardDivs[row][i].classList.remove('current');
        }
    }

    checkStatus() {
        console.log(this.lastRow);
        if (this.lastRow.join('') === this.solution) {
            this.addWin(this.lastRowNumber);
            modal.show('stats', 'win');
            this.reset();
        } else if (this.lastRowNumber >= puzzleLength) {
            this.reset();
            modal.show('stats', 'lose');
        }
    }

    async shakeRow(row) {
        row = this._cardDivs[row];
        if (!row) return false;
        const toggleClass = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    row.forEach(x => x.classList.toggle('shift1'));
                    row.forEach(x => x.classList.toggle('shift2'));
                    resolve('');          
                }, 80);
            });
        }
        row.forEach(x => x.classList.add('shift1'));
        for (let i = 0; i < wordLength; i++) {
            await toggleClass();
        }
        row.forEach(x => x.classList.remove('shift1', 'shift2'));
    }

    async animateLetter(letter) {
        const inOut = (out) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    letter.classList.toggle('in', !out);
                    letter.classList.toggle('out', out);
                    resolve('');          
                }, 80);
            });
        }
        letter.classList.add('out');
        await inOut(false);
        await inOut(true);
        letter.classList.remove('in', 'out')
    }

    async keyPressed(key) {
        const shake = (msg) => {
            this.shakeRow(this.lastRowNumber);
            modal.showError(msg);            
        }
        switch (key) {
            case 'enter': 
                if (this.lastRow.length === wordLength) {
                    if (this.wordExists(this.lastRow.join(''))) {
                        await this.checkLetters(this.lastRowNumber);
                        this.checkStatus();                                
                        this.update();                                    
                        this.matrix.push([]);
                    } else 
                        shake("Word doesn't exist") 
                    
                } else {
                    shake('Not enough letters');
                }
                break;
            case 'backspace':
                if (this.lastRow && this.lastRow.length > 0) {
                    this.lastRow.pop();
                    this.update();
                } else {
                    shake('No letters to erase');
                }
                break;
            default:
                if (this.matrix.length === 0) {
                    this.matrix.push([]);
                }
                if (this.lastRow.length < wordLength) {
                    this.lastRow.push(key);
                    this.update();
                    this.animateLetter(this._cardDivs[this.lastRowNumber][this.lastRow.length - 1]);
                } else {
                    shake('Five letter max');                    
                }
        }
    }
}

const revealCard = (card) => {
    return new Promise(resolve => {
        card.style.transition = 'none';                
        card.style.transform = 'rotateX(180deg)';
        setTimeout(() => {
            card.style.transition = 'transform 0.3s ease-out';
            card.style.transform = 'rotateX(0deg)';
            setTimeout(() => { 
                card.style.transform = '';  
                card.style.transition = '';             
                resolve('');     
            }, 100);    
        }, 50);        
    });
}      

const puzzle = new Puzzle();

export { puzzle, wordLength, puzzleLength, revealCard}