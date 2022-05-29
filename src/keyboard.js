const layouts = {
    en: {
        locale: 'en',
        name: 'English',
        keys: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    },
    es: {
        locale: 'es',
        name: 'Espanol',
        keys: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    },
    ru: {
        locale: 'ru',
        name: 'Русский',
        keys: ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё']
    },
}

class Keyboard {
    _lay
    _keys = [];
    _keypressFunc;
    constructor() {
        this.switch(layouts.en);

        //Add keypress event listener
        window.addEventListener('keydown', e => {
            const div = this.findKeyDiv(e.key);
            if (div) {
                this.press(e.key);
                // Key press animation
                div.classList.add('pressed');
                setTimeout(() => div.classList.remove('pressed'), 200);
                e.preventDefault();
            }
        });
    }

    //generate keyboard from layout
    switch(layout = layouts.en) {
        const createKeyDiv = (key, special = false) => {
            const keyDiv = document.createElement('div');
            keyDiv.className = `key key-${key}`;
            keyDiv.innerHTML = special ? '' : key;
            keyDiv.keyValue = key;
            keyDiv.addEventListener('click', e => this.press(key));  
            this._keys.push(keyDiv);          
            return keyDiv;        
        }
        this._keys = [];
        const keyboardFragment = new DocumentFragment();
        layout.keys.forEach((row, ind) => {
            const rowDiv = document.createElement('div');
            rowDiv.className = `row row-${ind}`;
            row.split('').forEach(key => rowDiv.appendChild(createKeyDiv(key)));
            if (ind === layout.keys.length - 1) {
                rowDiv.insertBefore(createKeyDiv('enter', true), rowDiv.children[0]);
                rowDiv.appendChild(createKeyDiv('backspace', true));
            }
            keyboardFragment.appendChild(rowDiv);
        });
        document.querySelector('.keyboard').replaceChildren(keyboardFragment);
    }

    set keyFunction (f) {
        this._keypressFunc = f; 
    }

    //Find Key Div
    findKeyDiv(key) {
        key = key.toLowerCase();
        return this._keys.find(x => x.keyValue === key);
    }

    press(key) {
        if (this.findKeyDiv(key) && this._keypressFunc) {
            this._keypressFunc(key.toLowerCase());
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