/* eslint-disable no-unused-vars */
import { MenuOptions } from '../models/menuOptions';
import { Component } from '../components/component/component';
import './menu.scss';

export class Menu extends Component {
  constructor(public selector: string, public menuOptions: MenuOptions[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
    <nav class="menu">
    <ul>
    <li class= "menu__home"><a href="home.path">Home</a></li>
    <li class="menu__favorite"><a href="favorite.path">My favorite</a></li>
    </ul>
    </nav>
    `;
  }
}
