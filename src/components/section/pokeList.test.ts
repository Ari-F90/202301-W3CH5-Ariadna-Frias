import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PokeList } from './pokeList';

describe('Given a PokeList component', () => {
  describe('When we make a instance for a PokeList Class', () => {
    test('it should be a instance of PokeList', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new PokeList('slot');
      expect(element).toBeInstanceOf(PokeList);
      const ul = screen.getByRole('list');
      expect(ul).toBeInTheDocument();
    });
  });
});
