import { $ } from "./utils";
import { currentLayout, switchLanguage } from "./language";
import layouts from "./translations.json";
import { puzzle } from "./puzzle";
import modal from "./modal";

const initSettings = () => {
    $('.check-box', document, true).forEach(checkbox => {
        checkbox.addEventListener('click', e => {            
            checkbox.classList.toggle('checked');
            document.body.classList.toggle(checkbox.id, checkbox.classList.contains('checked'));            
        });
    });

    const langs = $('.language-selector>li', document, true);
    const checkStatus = () => {
        langs.forEach(item => {
            if (item.id === currentLayout.locale) {
                item.classList.add('checked');
            } else {
                item.classList.remove('checked')
            }
        });
    }
    checkStatus();
    langs.forEach(item => {        
        item.addEventListener('click', e => {
            if (e.currentTarget.id !== currentLayout.locale) {
                switchLanguage(layouts[e.currentTarget.id]);
                checkStatus();
                puzzle.reset();
            }
        });
    });

    //Reset dialog event bindings
    $('#reset-yes-btn').addEventListener('click', () => {
        puzzle.reset();
        modal.hide();
    });
    $('#reset-no-btn').addEventListener('click', () => modal.hide());    
}

export { initSettings };