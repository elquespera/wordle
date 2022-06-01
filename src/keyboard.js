import { layouts, currentLayout } from "./language";
import { puzzle } from "./puzzle";

class Keyboard {
    _keys = [];
    constructor() {
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
    switch(layout = currentLayout) {
        const createKeyDiv = (key, special = false) => {
            const keyDiv = document.createElement('button');
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
        const maxKeys = Math.max(...layout.keys.
            map((x, i, arr) => i === arr.length-1 ? x.length + 3 : x.length));
        document.documentElement.style.setProperty('--keyboard-max-keys', maxKeys);
        document.querySelector('.keyboard').replaceChildren(keyboardFragment);
    }

    //Find Key Div
    findKeyDiv(key) {
        key = key.toLowerCase();
        return this._keys.find(x => x.keyValue === key);
    }

    press(key) {
        if (this.findKeyDiv(key) && puzzle) {
            puzzle.keyPressed(key.toLowerCase());
        }
    }
}

const keyboard = new Keyboard();

export { keyboard };