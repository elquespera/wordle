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

// const langBtn = document.querySelector('.lang-btn');
// const langFlyout = document.querySelector('.lang-flyout');

// let flyoutOpen = false;

const switchLanguage = (layout = layouts.en) => {  
    
}

const initLanguage = (layout = layouts.en) => {
    // const langFrag = new DocumentFragment();
    // Object.values(layouts).forEach(layout => {
    //     const item = document.createElement('li');
    //     item.innerHTML = layout.name;
    //     langFrag.appendChild(item);
    // });
    // langFlyout.replaceChildren(langFrag);
    // langBtn.addEventListener('click', toggleFlyout);

    // window.addEventListener('click', (event) => {
    //     if (flyoutOpen && event.target !== langFlyout) {
    //         toggleFlyout();
    //     }
    // });
    // window.addEventListener('keydown', event => {
    //     if (flyoutOpen && event.key == 'Escape') {
    //         toggleFlyout();
    //     }
    // });     
}

export {layouts, initLanguage, switchLanguage};