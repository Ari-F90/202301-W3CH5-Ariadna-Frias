/* eslint-disable no-unused-vars */

import { Component } from '../component/component';
import './menu.scss';

export class Menu extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
    <nav class="menu" role="menu">
    <ul>
    <li class= "menu__home"><a href="home.path">Home</a></li>
    <li class="menu__favorite"><a href="favorite.path">My favorite</a></li>
    </ul>
    </nav>
    `;
  }
}
