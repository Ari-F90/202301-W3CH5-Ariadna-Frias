/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Menu } from './menu/menu';
import { MenuOptions } from './models/menuOptions';
import './index.scss';

const menuOptions: MenuOptions[] = [
  { label: 'Home', path: '/home' },
  { label: 'My favorite', path: '/favorite' },
];

new Header('.app');
new Menu('.header', menuOptions);
