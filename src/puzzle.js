import modal from "./modal";

class Puzzle {
    _cardDivs = [];
    _solution = 'space';
    _currentSolution = [];
    _modal = modal;
    _stats = {
        played: 20,
        dist: {
            1: 3,
            3: 7,
            4: 3,
            5: 3
        }
    }
    _keyboard;
    constructor() {
        document.querySelectorAll('#puzzle > .row').forEach(row => {
            const _row = [];
            row.querySelectorAll('.letter').forEach(letter => _row.push(letter));
            this._cardDivs.push(_row.slice());
        });
        this.reset();
    }

    get solution() {
        return this._solution;
    }

    get modal() {
        return this._modal;
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
        this.update();
        this._cardDivs.flat().forEach(card => {
            card.classList.remove('not-preset', 'present', 'unique', 'current')
        })
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

    isWordValid(word) {
        return true;
    }

    checkLetters(row) {
        this.matrix[row].forEach((letter, i) => {
            let className = 'not-present';
            if (this.solution.includes(letter)) {
                if (this.solution[i] === letter) {
                    className = 'unique';
                } else {
                    className = 'present';
                }
            }
            this._cardDivs[row][i].classList.add(className);
            this._cardDivs[row][i].classList.remove('current');
        });
    }

    checkStatus() {
        const lastRow = this._currentSolution[this._currentSolution.length - 1];
        console.log(lastRow);
        if (lastRow && lastRow.join('') === this.solution) {
            this.addWin(this._currentSolution.length - 1);
            this.reset();
            modal.show('stats');
        }
    }

    async shakeRow(row) {
        if (row < 0 || row > this._cardDivs.length - 1)
            return false;
        row = this._cardDivs[row][0].parentElement;
        const toggleClass = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    row.classList.toggle('shift1');
                    row.classList.toggle('shift2');
                    resolve('');          
                }, 80);
            });
        }
        row.classList.add('shift1');
        for (let i = 0; i < 5; i++) {
            await toggleClass();
        }
        row.classList.remove('shift1', 'shift2');
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

    set keyboard(k) {
        const keyPressed = (key) => {
            switch (key) {
                case 'enter': 
                    if (this.lastRow && this.lastRow.length === 5) {
                        if (this.isWordValid(this.lastRow.join(''))) {
                            if (this.matrix.length < 6) {
                                this.checkLetters(this.lastRowNumber);
                                this.checkStatus();                                
                                this.matrix.push([]);
                                this.update();            
                            }
                        }
                    } else {
                        this.shakeRow(this.lastRowNumber);
                        modal.showError('Not enough letters');
                    }
                    break;
                case 'backspace':
                    if (this.lastRow && this.lastRow.length > 0) {
                        this.lastRow.pop();
                        this.update();
                    } else {
                        this.shakeRow(this.lastRowNumber);
                        modal.showError('No letters to erase');
                    }
                    break;
                default:
                    if (this.matrix.length === 0) {
                        this.matrix.push([]);
                    }
                    if (this.lastRow.length < 5) {
                        this.lastRow.push(key);
                        this.update();
                        this.animateLetter(this._cardDivs[this.lastRowNumber][this.lastRow.length - 1]);
                    } else {
                        modal.showError('Five letter max');
                        this.shakeRow(this.lastRowNumber);
                    }
            }
        }
        if (k) {
            k.keyFunction = keyPressed;
            this._keyboard = k;
        }
    }
}

export default new Puzzle();