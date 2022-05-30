import { $, newEl } from "./utils";
import { initSettings } from "./settings";
import { keyboard } from "./keyboard";

const modalPages = ['help', 'stats', 'settings'];

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
        },
        stats: {
            title: 'Statistics',
            played: 'Played',
            won: 'Won',
            guessDist: 'Guess discribution'
        },
        settings: {
            title: 'Settings',
            dark: 'Dark theme',
            contrast: 'High Conrast',
            lang: 'Language'
        }
    },
    es: {
        locale: 'es',
        name: 'Espanol',
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
        },
        stats: {
            title: 'Statistics',
            played: 'Played',
            won: 'Won',
            guessDist: 'Guess discribution'
        },
        settings: {
            title: 'Settings',
            dark: 'Dark theme',
            contrast: 'High Conrast',
            lang: 'Language'
        }        
    },
    ru: {
        locale: 'ru',
        name: 'Русский',
        keys: ['йцукенгшщзхъ', 'фывапролджэ', 'ячсмитьбюё'],
        help: {
            title: 'Правила игры',
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
        },
        stats: {
            title: 'Statistics',
            played: 'Played',
            won: 'Won',
            guessDist: 'Guess discribution'
        },
        settings: {
            title: 'Настройки',
            dark: 'Темная тема',
            contrast: 'Высококонтрастная тема',
            lang: 'Язык'
        }
    },
}

let currentLayout = layouts.en;


const switchLanguage = (layout = currentLayout) => {      
    modalPages.forEach(pName => {
        const pane = document.querySelector('#' + pName);
        const paneFrag = new DocumentFragment();
        paneFrag.append(newEl('h3', layout[pName].title));

        switch (pName) {
            case 'help':
                paneFrag.append( 
                    ...layout.help.desc.map(d => newEl('p', d)),
                    newEl('div', '', 'hr'),
                    newEl('h4', layout.help.examplesTitle)
                );

                Object.values(layout.help.examples).forEach((example, ind) => {
                    const item = newEl('div', '', 'puzzle');
                    example.word.split('').forEach((letter, i) => {
                        const card = newEl('div', letter, 'card');
                        if (i === example.highlight) {
                            card.classList.add(Object.keys(layout.help.examples)[ind]);
                        }
                        item.appendChild(card);
                    });
                    paneFrag.append(item, newEl('p', example.msg));
                });
                paneFrag.append(newEl('div', '', 'hr'), 
                                newEl('h4', layout.help.enjoy));
                break;
            case 'stats':
                const scoreTable = newEl('div', '', 'score-table');
                scoreTable.append(newEl('div', 0, 'played score'),
                                  newEl('div', 0, 'won score'),
                                  newEl('div', layout.stats.played, 'score-label'),
                                  newEl('div', layout.stats.won, 'score-label'));                                   
                const guessDist = newEl('div', '', 'guess-dist');
                for (let i = 1; i <= 6; i++) {
                    guessDist.append(newEl('div', i, 'score'),
                                     newEl('div', 0, 'score-bar'));
                }
                paneFrag.append(
                    scoreTable, newEl('div', '', 'hr'),
                    newEl('h3', layout.stats.guessDist),
                    guessDist
                );
                break;
            case 'settings': {
                const table = newEl('div', '', 'settings-table');

                const darkMode = newEl('div');
                darkMode.append(newEl('div', layout.settings.dark), 
                                newEl('div', '<span></span>', 'check-box dark-mode'));
                const contrastMode = newEl('div');                                
                contrastMode.append(newEl('div', layout.settings.contrast), 
                             newEl('div', '<span></span>', 'check-box contrast-mode'));
                const language = newEl('div');
                const ul = newEl('ul', '', 'language-selector');
                Object.values(layouts).forEach(l => ul.append(newEl('li', l.name, '', l.locale)));
                language.append(newEl('div', layout.settings.lang), ul)
                                             
                table.append(darkMode, contrastMode, language);                 
                paneFrag.append(table);

                break;
            }
        }         
        pane.replaceChildren(paneFrag);
        currentLayout = layout;
        keyboard.switch(currentLayout);
        initSettings();  
    });
}

const initLanguage = () => {
    switchLanguage(currentLayout);
}

export {layouts, modalPages, currentLayout, initLanguage, switchLanguage};