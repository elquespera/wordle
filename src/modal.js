class Modal {
    _open = false;
    _overlay = document.querySelector('.modal-overlay');
    constructor() {
        window.addEventListener('click', (e) => {
            if (e.target === this._overlay) {
                this.hide();
            }
        });
        window.addEventListener('keydown', event => {
            if (event.key == 'Escape') {
                this.hide();
            }
        });        
    }
    toggle() {
        this._open = !this._open;
        if (this._open) {
            this._overlay.style.display = 'flex';
        } else {
            this._overlay.style.display = 'none';
        }
    }
    show() {
        if (!this._open) this.toggle();
    }
    hide() {
        if (this._open) this.toggle();
    }
}

export default new Modal();