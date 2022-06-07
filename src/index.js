import './styles/main.scss';
import { puzzle } from './puzzle';
import { keyboard } from './keyboard';
import { initLanguage } from './language';


keyboard.keyFunction = puzzle.keyPressed;
initLanguage();

puzzle.checkStoredGame();