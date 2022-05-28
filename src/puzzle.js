class Puzzle {
    _cardDivs = [];
    _solution = 'space';
    _currentSolution = [
        ['a', 'b', 'b', 'c', 'e'],
        ['a', 'b']
    ];
    _keyboard;
    constructor() {
        document.querySelectorAll('.puzzle > .row').forEach(row => {
            const _row = [];
            row.querySelectorAll('.letter').forEach(letter => _row.push(letter));
            this._cardDivs.push(_row.slice());
        });
        this.reset();
    }

    reset() {
        this._currentSolution = [];
        this.update();
    }

    update() {
        this._cardDivs.forEach((row, i) => row.forEach((div, j) => {
            div.innerHTML = this._currentSolution[i] ? this._currentSolution[i][j] || '' : '';
        }));
    }

    isWordValid(word) {
        return true;
    }

    checkLetters(row) {
        this._currentSolution[row].forEach((letter, i) => {
            let className = 'not-present';
            if (this._solution.includes(letter)) {
                if (this._solution[i] === letter) {
                    className = 'unique';
                } else {
                    className = 'present';
                }
            }
            this._cardDivs[row][i].classList.add(className);
        });
    }

    showError(error) {
        const errorDiv = document.querySelector('.error-msg');
        errorDiv.innerHTML = error;
        errorDiv.classList.add('visible');
        setTimeout(() => errorDiv.classList.remove('visible'), 2000);
    }

    checkStatus() {
        
    }

    async shakeRow(row) {
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
        row.classList.remove('shift1');
        row.classList.remove('shift2');
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
                                matrix.push([]);
                                this.update();
                            }
                        }
                    } else {
                        this.shakeRow(this._cardDivs[matrix.length-1][0].parentElement)
                        this.showError('Not enough letters');
                    }
                    break;
                case 'return':
                    if (lastRow && lastRow.length > 0) {
                        lastRow.pop();
                        this.update();
                    } else {
                        this.showError('No letters to erase');
                    }
                    break;
                default:
                    if (matrix.length === 0) {
                        matrix.push([]);
                    }
                    if (matrix[matrix.length - 1].length < 5) {
                        matrix[matrix.length - 1].push(key);
                        this.update();
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