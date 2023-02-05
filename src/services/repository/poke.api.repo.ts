/* eslint-disable no-unused-vars */
import { PokeStructure } from '../../models/pokemon';

export interface PokeApiRepoStructure {
  loadPokemons(): Promise<PokeStructure[]>;
}

export class PokeApiRepo {
  url: string;
  constructor(public storeName: string = 'Pokemon') {
    this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  }

  async loadPokemons(): Promise<PokeStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as PokeStructure[];
    return data;
  }
}
