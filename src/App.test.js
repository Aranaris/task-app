import { render, screen } from '@testing-library/react';
import App from './App';

test('Add New Task form is displayed on page', () => {
  render(<App />);
  const linkElement = screen.getByText('Add New Task:');
  expect(linkElement).toBeInTheDocument();
});
