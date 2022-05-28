import modal from "./modal";

class Puzzle {
    _cardDivs = [];
    _solution = 'space';
    _currentSolution = [
        ['a', 'b', 'b', 'c', 'e'],
        ['a', 'b']
    ];
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

    reset() {
        this._currentSolution = [];
        this.update();
    }

    update() {
        const matrix = this._currentSolution;
        this._cardDivs.forEach((row, i) => row.forEach((div, j) => {
            div.innerHTML = matrix[i] ? matrix[i][j] || '' : '';
        }));
        if (matrix.length > 0 && this._cardDivs[matrix.length-1]) {
            this._cardDivs[matrix.length-1].forEach(card => {
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
        this._currentSolution[row].forEach((letter, i) => {
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
            modal.show();
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
            const matrix = this._currentSolution; 
            const lastRow = matrix[matrix.length - 1];
            switch (key) {
                case 'enter': 
                    if (lastRow && lastRow.length === 5) {
                        if (this.isWordValid(lastRow.join(''))) {
                            if (matrix.length < 6) {
                                this.checkLetters(matrix.length - 1);
                                this.checkStatus();                                
                                matrix.push([]);
                                this.update();            
                            }
                        }
                    } else {
                        this.shakeRow(matrix.length - 1);
                        modal.showError('Not enough letters');
                    }
                    break;
                case 'return':
                    if (lastRow && lastRow.length > 0) {
                        lastRow.pop();
                        this.update();
                    } else {
                        this.shakeRow(matrix.length - 1);
                        modal.showError('No letters to erase');
                    }
                    break;
                default:
                    if (matrix.length === 0) {
                        matrix.push([]);
                    }
                    if (matrix[matrix.length - 1].length < 5) {
                        matrix[matrix.length - 1].push(key);
                        this.update();
                        this.animateLetter(this._cardDivs[matrix.length - 1][matrix[matrix.length - 1].length - 1]);
                    } else {
                        modal.showError('Five letter max');
                        this.shakeRow(matrix.length - 1);
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