const setItem = (itemKey, itemValue) => {
    if (window.localStorage && window.localStorage.setItem) {
        window.localStorage.setItem(itemKey, JSON.stringify(itemValue));
    }
}

const getItem = (itemKey) => {
    if (window.localStorage && window.localStorage.getItem) {
        const item = window.localStorage.getItem(itemKey);
        try {
            return JSON.parse(item);
        } 
        catch {
            return undefined; 
        }
    } 
    else
        return undefined;
}

const removeItem = (itemKey) => {
    if (window.localStorage && window.localStorage.getItem) {
        window.localStorage.removeItem(itemKey);
    }
}

export { setItem, getItem, removeItem }