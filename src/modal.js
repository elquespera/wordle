class Modal {
    _open = false;
    _overlay = document.querySelector('.modal-overlay');
    _modal = document.querySelector('.modal');
    _panes = this._modal.querySelectorAll('.pane');
    _closeBtn = document.querySelector('.close-btn');
    _helpBtn = document.querySelector('.help-btn');
    _statsBtn = document.querySelector('.stats-btn');
    _puzzle;

    constructor() {
        window.addEventListener('click', (e) => {
            if (e.target === this._overlay) {
                this.hide();
            }
        });
        window.addEventListener('keydown', event => {
            if (event.key == 'Escape') {
                this.hide();
            } else {
                if (this._open)
                    event.stopImmediatePropagation();
            }
        }); 
        this._statsBtn.addEventListener('click', event => {
            this.show('stats');
        });
        this._helpBtn.addEventListener('click', event => {
            this.show('help');
        });     
        this._closeBtn.addEventListener('click', () => this.hide());
    }

    get puzzle() {
        return this._puzzle;
    }

    set puzzle(p) {
        this._puzzle = p;
    }

    toggle() {
        this._open = !this._open;
        if (this._open) {
            this._overlay.style.display = 'flex';
            setTimeout(() => {
                this._modal.classList.add('open');                 
            }, 10);
        } else {
            this._modal.classList.remove('open');
            setTimeout(() => {
                this._overlay.style.display = 'none';
            }, 300);
        }
    }
    show(msg = 'stats') {
        if (!this._open) {            
            //Calculate & display statistics
            if (msg === 'stats' && this.puzzle) {
                document.querySelector('.played.score').innerHTML = this.puzzle.stats.played;
                document.querySelector('.won.score').innerHTML = this.puzzle.wonCount;
                const scoreBins = document.querySelectorAll('.guess-dist>.score-bar');
                scoreBins.forEach((bin, i) => {
                    const count = this.puzzle.stats.dist[i] || 0;
                    const width = count === 0 ? 'fit-content' : count / this.puzzle.maxWin * 100 + '%';
                    bin.style.width = width;
                    bin.innerHTML = count;                    
                });
            }
            this._panes.forEach(pane => {
                if (pane.id === msg) {
                    pane.style.display = 'flex';
                } else {
                    pane.style.display = 'none';
                }
            })
            this.toggle();
        }
    }
    hide() {
        if (this._open) this.toggle();
    }
    
    showError(error) {
        const errorDiv = document.querySelector('.error-msg');
        errorDiv.innerHTML = error;
        errorDiv.style.transition = 'opacity 0.5s';
        errorDiv.classList.add('visible');
        setTimeout(() => errorDiv.classList.remove('visible'), 2000);
    }    
}

export default new Modal();