const setItem = (itemKey, itemValue) => {
    if (window.localStorage && window.localStorage.setItem) {
        window.localStorage.setItem(itemKey, JSON.stringify(itemValue));
    }
}

const getItem = (itemKey) => {
    if (window.localStorage && window.localStorage.getItem) {
        return window.localStorage.getItem(itemKey);
    }
}

export { setItem, getItem }