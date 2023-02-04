/* eslint-disable no-unused-vars */
type HasId = {
  id: number;
};

export type ProtoPokeStructure = {
  name: string;
  image: string;
  isFavorite: boolean;
};

export type PokeStructure = HasId & ProtoPokeStructure;

export class Pokemon implements PokeStructure {
  public isFavorite: boolean;
  constructor(public id: number, public name: string, public image: string) {
    this.isFavorite = false;
  }
}
