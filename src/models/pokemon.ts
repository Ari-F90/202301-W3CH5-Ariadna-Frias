/* eslint-disable no-unused-vars */
export type HasId = {
  id: number;
};

export type ProtoPokeStructure = {
  name: string;
  image: string;
  isFavorite: boolean;
};

export type PokeStructure = HasId & ProtoPokeStructure;

export class Pokemon implements PokeStructure {
  public id!: number;
  public isFavorite: boolean;
  constructor(public name: string, public image: string) {
    this.isFavorite = false;
  }
}
