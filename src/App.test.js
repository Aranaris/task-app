import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a task (test1) in the page', () => {
  render(<App />);
  const linkElement = screen.getByText('test1');
  expect(linkElement).toBeInTheDocument();
});
