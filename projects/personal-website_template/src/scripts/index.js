import { switchHeader } from './modules/switchHeader';
import { slider } from './modules/slider';
import { modal } from './modules/modal';
import { insertZigZag } from './modules/insertZigZag';
import { currentYear } from './modules/currentYear';

import '../styles/index.css';

switchHeader();
slider('.slider', '.benefits__list', '.benefits__item');
slider('.feedback__wrapper', '.feedback__list', '.feedback__item');
modal();
insertZigZag();
currentYear();
