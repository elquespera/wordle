import './styles/main.scss';
// import helpIcon from './assets/help.svg';
// import githubIcon from './assets/github.svg';
// import chartIcon from './assets/chart.svg';
// import closeIcon from './assets/close.svg';
// import returnIcon from './assets/arrow-turn-down.svg';
// import backspaceIcon from './assets/backspace.svg';
import puzzle from './puzzle';
import keyboard from './keyboard';
import { initLanguage } from './language';

puzzle.keyboard = keyboard;
puzzle.modal.puzzle = puzzle;

initLanguage();