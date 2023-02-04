/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="header">
      <img class ="header__logo"src="pokemon-logo.svg">
        <h1 class="header__title">Pokémon App</h1>
        <p class="header__phrase" role="phrase" >Know all of them!</p>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
