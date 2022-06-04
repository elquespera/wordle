import { $ } from "./utils";
import { modalPages } from "./language";
import { puzzle } from "./puzzle";


class Modal {
    _open = false;
    _closeBtn = $('.close-btn');

    constructor() {
        window.addEventListener('click', (e) => {
            if (e.target === $('.modal-overlay')) {
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
        modalPages.forEach(page => {
            $(`.${page}-btn`).addEventListener('click', e => this.show(page));
        });

        this._closeBtn.addEventListener('click', () => this.hide());
    }

    toggle() {
        this._open = !this._open;
        if (this._open) {
            $('.modal-overlay').style.display = 'flex';
            setTimeout(() => {
                $('.modal').classList.add('open');                 
            }, 10);
        } else {
            $('.modal').classList.remove('open');
            setTimeout(() => {
                $('.modal-overlay').style.display = 'none';
            }, 300);
        }
    }

    show(msg = 'help') {

        if (!this._open) {            
            //Calculate & display statistics
            switch(msg) {
                case 'stats':
                    $('.played.score').innerHTML = puzzle.stats.played;
                    $('.won.score').innerHTML = puzzle.wonCount;
                    const scoreBins = $('.guess-dist>.score-bar', document, true);
                    scoreBins.forEach((bin, i) => {
                        const count = puzzle.stats.dist[i] || 0;
                        const width = count === 0 ? 'fit-content' : count / puzzle.maxWin * 100 + '%';
                        bin.style.width = width;
                        bin.innerHTML = count;                    
                    });
                    break;
            }
            modalPages.map(pname => $(`.${pname}`)).forEach(pane => {
                pane.style.display = pane.id === msg ? 'flex' : 'none';
            });
            this.toggle();
        }
    }
    hide() {
        if (this._open) this.toggle();
    }
    
    showError(error) {
        const errorDiv = $('.error-msg');
        errorDiv.innerHTML = error;
        errorDiv.style.transition = 'opacity 0.5s';
        errorDiv.classList.add('visible');
        setTimeout(() => errorDiv.classList.remove('visible'), 2000);
    }    
}

export default new Modal();