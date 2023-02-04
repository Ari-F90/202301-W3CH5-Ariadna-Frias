/* eslint-disable no-unused-vars */
import { PokeStructure } from '../../models/pokemon';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string, public pokemon: PokeStructure) {
    super();
    this.pokemon = { ...pokemon };
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }

  createTemplate() {
    return `
    <div><li class="card">
        <span>${this.pokemon.name}</span>
      <span><img>${this.pokemon.image}</img></span>
    </li></div>`;
  }
}
