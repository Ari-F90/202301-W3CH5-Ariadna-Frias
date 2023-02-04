import '@testing-library/jest-dom';

import { Menu } from './menu';

describe('Given a Menu component', () => {
  describe('When we instance a Menu class', () => {
    test('the element should be a instance of Menu', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Menu('slot');
      expect(element).toBeInstanceOf(Menu);
    });
  });
});
