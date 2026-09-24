import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage title and welcome message', () => {
  render(<App />);
  expect(screen.getByText(/welcome to my react app/i)).toBeInTheDocument();
  expect(
    screen.getByText(/this is a simple homepage built with create react app/i)
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /show alert/i })).toBeInTheDocument();
});
