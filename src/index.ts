/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { PokeList } from './components/section/pokeList';
import { Footer } from './components/footer/footer';

import './index.scss';

new Header('.app');
new Menu('.header');
new PokeList('header');
new Footer('section');
