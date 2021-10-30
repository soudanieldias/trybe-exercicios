import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test(`Don't renders 'texto que não existe!'`, () => {
  render(<App />);
  const linkElement = screen.getByText(/texto que não existe!/i);
  expect(linkElement).not.toBeInTheDocument();
});
