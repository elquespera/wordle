import { $ } from "./utils";
import { layouts, currentLayout, switchLanguage } from "./language";

const initSettings = () => {
    $('.check-box', document, true).forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            e.currentTarget.classList.toggle('checked');
        })
    });

    const langs = $('.language-selector>li', document, true);
    const checkStatus = () => {
        langs.forEach(item => {
            if (item.id === currentLayout.locale) {
                item.classList.add('checked');
            } else {
                item.classList.remove('checked')
            }
        })
    }
    checkStatus();
    langs.forEach(item => {        
        item.addEventListener('click', e => {
            if (e.currentTarget.id !== currentLayout.locale) {
                switchLanguage(layouts[e.currentTarget.id]);
                checkStatus();
            }
        });
    });
}

export { initSettings };