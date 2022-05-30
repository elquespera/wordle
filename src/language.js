const layouts = {
    en: {
        locale: 'en',
        name: 'English',
        keys: ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],
        help: {
            title: 'How to play',
            desc: [
                `Guess the <strong>WORDLE</strong> in six tries`,
                `Each guess must be a valid five-letter word. Hit the enter button to submit.`,
                `After each guess, the color of the tiles will change to show how close your guess was to the word.`
            ],
            examplesTitle: 'Examples',
            examples: {
                correct: {
                    word: 'space',
                    highlight: 0,
                    msg: `The letter <strong>S</strong> is in the word and in the correct spot.`                    
                },
                present: {
                    word: 'abide',
                    highlight: 2,
                    msg: `The letter <strong>I</strong> is in the word but in the wrong spot.`
                },
                'not-present': {
                    word: 'wrong',
                    highlight: 4,
                    msg: `The letter <strong>N</strong> is not in the word in any spot.`
                } 
            },
            enjoy: 'Enjoy the game!'
        }
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


const switchLanguage = (layout = layouts.en) => {  
    const createEl = (tag, text = '', className = '') => {
        const el = document.createElement(tag);
        el.innerHTML = text;
        el.className = className;
        return el;
    }
    const helpPane = document.querySelector('#help');
    const helpFrag = new DocumentFragment();
    
    helpFrag.append(createEl('h3', layout.help.title), 
                    ...layout.help.desc.map(d => createEl('p', d)),
                    createEl('div', '', 'hr'),
                    createEl('h4', layout.help.examplesTitle));

    Object.values(layout.help.examples).forEach((example, ind) => {
        const item = createEl('div', '', 'puzzle');
        example.word.split('').forEach((letter, i) => {
            const card = createEl('div', letter, 'card');
            if (i === example.highlight) {
                card.classList.add(Object.keys(layout.help.examples)[ind]);
            }
            item.appendChild(card);
        });
        helpFrag.append(item, createEl('p', example.msg));
    });
    helpFrag.append(createEl('div', '', 'hr'), createEl('h4', layout.help.enjoy));
    helpPane.replaceChildren(helpFrag);
}

const initLanguage = (layout = layouts.en) => {

}

export {layouts, initLanguage, switchLanguage};