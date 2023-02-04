import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';

describe('Given a Card component', () => {
  describe('When we instance a new Card class', () => {
    test('It should be in the document', () => {
      document.body.innerHTML = '<ul></ul>';
      const element = new Card('ul', {
        name: 'pikachu',
        image:
          'https://www.google.com/search?q=pikachu&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjmzZqP7vz8AhX2SvEDHZJwDRQQ_AUoAXoECAEQAw&biw=1440&bih=743&dpr=2#imgrc=rChpm8kJcWx81M',
        id: 1,
        isFavorite: true,
      });
      expect(element).toBeInstanceOf(Card);
    });
    test('It render the card in the document', () => {
      const li = screen.getByRole('listitem');
      expect(li).toBeInTheDocument();
    });
  });
});
