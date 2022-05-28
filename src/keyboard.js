import modal from './modal';

class Keyboard {
    _keys = [];
    _keypressFunc;
    constructor() {
        //Aquire key divs
        document.querySelectorAll('.keyboard > .row').forEach(row => {
            row.querySelectorAll('.key').forEach(key => {
                this._keys.push(key);
            })
        });
        //Add click event listener
        this._keys.forEach(key => key.addEventListener('click', e => {
            this.press(e.currentTarget.innerHTML);
        }));
        //Add keypress event listener
        window.addEventListener('keydown', e => {
            const div = this.findKeyDiv(e.key);
            if (div) {
                this.press(e.key);
                // Key press animation
                div.classList.add('pressed');
                setTimeout(() => {
                    div.classList.remove('pressed');
                }, 200);
                e.preventDefault();
            }
        });
    }

    set keyFunction (f) {
        this._keypressFunc = f; 
    }

    //Find Key Div
    findKeyDiv(key) {
        key = key.toLowerCase();
        if (key === 'backspace') key = 'return';
        return this._keys.find(x => x.innerHTML === key);
    }

    press(key) {
        key = this.findKeyDiv(key);
        if (key) {
            if (this._keypressFunc) {
                this._keypressFunc(key.innerHTML);
            }
        }
    }
    setKeyAttributes(key, options) {
        key = this.findKeyDiv(key);
        if (key) {
            if (options.present) {
                key.classList.add('present')
            } else {
                key.classList.remove('present')
            }
            if (options.unique) {
                key.classList.add('unique')
            } else {
                key.classList.remove('unique')
            }
        }
    }
}

export default new Keyboard();