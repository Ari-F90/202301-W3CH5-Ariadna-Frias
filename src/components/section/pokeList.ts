/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './pokeList.scss';

export class PokeList extends Component {
  constructor(public selector: string) {
    super();

    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }

  createTemplate() {
    return `<section class="pokelist"><ul></ul></section>`;
  }
}
