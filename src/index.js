import './styles/main.scss';
import githubIcon from './assets/github.png';
import questionIcon from './assets/question.svg';
import keyboard from './keyboard';

keyboard.keyFunction = (key) => {
    console.log(`Key ${key} was pressed!`);
    keyboard.setKeyAttributes(key, {present: true})
}
