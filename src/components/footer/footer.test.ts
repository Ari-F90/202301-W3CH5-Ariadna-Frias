import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given a Footer component', () => {
  describe('When we instance a Footer class', () => {
    test('the element should be a instance of Footer', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Footer('slot');
      expect(element).toBeInstanceOf(Footer);
    });
    test('the role of copyright should be phrase', () => {
      const copyright = screen.getByRole('phrase');
      expect(copyright).toBeInTheDocument();
    });
  });
});
