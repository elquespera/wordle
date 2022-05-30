//jQuery-like Selector
export const $ = (selector, parent = document) => parent.querySelector(selector);

//Create new Element
export const newEl = (tagName, innerHTML = '', className = '') => {
    const el = document.createElement(tagName);
    el.innerHTML = innerHTML;    
    el.className = className;
    return el;
}