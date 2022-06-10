import { $, newEl } from "./utils";
import { initSettings } from "./settings";
import { keyboard } from "./keyboard";
import { puzzle, wordLength } from "./puzzle";
import layouts from "./translations.json";
import * as storage from "./storage.js";

const modalPages = ['help', 'stats', 'settings', 'reset'];

const LANG_KEY = 'lang';

let currentLayout = layouts.en;


const switchLanguage = (layout = currentLayout) => {   
    modalPages.forEach(pName => {
        const pane = document.querySelector('#' + pName);
        const paneFrag = new DocumentFragment();

        if (pName === 'stats') {
            const statusDiv = newEl('div', '', 'game-status-message');
            const puzzleDiv = newEl('div', '', 'puzzle')
            for (let i = 0; i < wordLength; i++) {
                puzzleDiv.append(newEl('div', '', 'card'));
            }
            statusDiv.append(newEl('h3', ), 
                             newEl('p', layout.stats.correctAnswer),
                             puzzleDiv);
            paneFrag.append(statusDiv);
        }

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
                const gitHubLink = newEl('a', '', 'icon-btn github-btn');
                gitHubLink.href = `https://github.com/elquespera/wordle`;
                gitHubLink.title = 'GitHub repo';
                paneFrag.append(newEl('div', '', 'hr'), 
                                newEl('h4', layout.help.enjoy),
                                gitHubLink);                             
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
                    guessDist,
                    newEl('button', 'Reset stats', 'text-btn', 'reset-stats-btn'),
                    newEl('p', 'This will erase your game history')
                );
                break;
            case 'settings': {
                const table = newEl('div', '', 'settings-table');

                const checkTheme = (checkbox) => {
                    if (storage.getItem(checkbox.id)) {
                        checkbox.classList.add('checked');
                        document.body.classList.add(checkbox.id);
                    }
                }

                const darkMode = newEl('div');
                darkMode.append(newEl('div', layout.settings.dark), 
                                newEl('div', '<span></span>', 'check-box dark-mode', 'dark-theme'));
                checkTheme($('#dark-theme', darkMode));
                
                const contrastMode = newEl('div');                                
                contrastMode.append(newEl('div', layout.settings.contrast), 
                             newEl('div', '<span></span>', 'check-box contrast-mode', 'high-contrast-theme'));
                checkTheme($('#high-contrast-theme', contrastMode));

                const language = newEl('div');
                const ul = newEl('ul', '', 'language-selector');
                Object.values(layouts).forEach(l => ul.append(newEl('li', l.name, '', l.locale)));
                language.append(newEl('div', layout.settings.lang), ul)
                                             
                table.append(darkMode, contrastMode, language);                 
                paneFrag.append(table);

                break;
            }
            case 'reset': {
                const yesno = newEl('div', '', 'yes-no');
                yesno.append(newEl('button', layout.reset.yes, 'text-btn', 'reset-yes-btn'),
                             newEl('button', layout.reset.no, 'text-btn', 'reset-no-btn'));
                paneFrag.append(newEl('p', layout.reset.question), yesno);
                break;
            }
        }         
        pane.replaceChildren(paneFrag);
    });
    currentLayout = layout;
    keyboard.switch(currentLayout);
    storage.setItem(LANG_KEY, layout.locale);
    initSettings();  
}

const initLanguage = () => {
    const userLanguage = () => navigator?.language?.slice(0, 2) || 'en';
    const locale = storage.getItem(LANG_KEY);
    currentLayout = layouts[locale] || layouts[userLanguage()] || layouts.en;
    switchLanguage(currentLayout);
}

export {layouts, modalPages, currentLayout, initLanguage, switchLanguage};