/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import GameLogic from './logic';

const app = new GameLogic();

app.renderField();

app.renderCounter();

setInterval(() => app.activateBlock(app.field), 1500);

app.click(app.field);
