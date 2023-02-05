/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { PokeList } from './components/section/pokeList';
import { Footer } from './components/footer/footer';

import { PokeApiRepo } from './services/repository/poke.api.repo';
import './index.scss';

const poke = await new PokeApiRepo().loadPokemons();
new Header('.app');
new Menu('.header');
new PokeList('header');
new Footer('section');
