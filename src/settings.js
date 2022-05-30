import { $ } from "./utils";

const initSettings = () => {
    $('.check-box', document, true).forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            e.currentTarget.classList.toggle('checked');
        })
    });
}

export { initSettings };