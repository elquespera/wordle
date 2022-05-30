import './styles/main.scss';
import { puzzle } from './puzzle';
import { keyboard } from './keyboard';
import { initLanguage } from './language';


keyboard.keyFunction = puzzle.keyPressed;
// puzzle.keyboard = keyboard;
// puzzle.modal.puzzle = puzzle;

initLanguage();