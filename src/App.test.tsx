import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders title and  button', () => {
  render(<App />);
  expect(screen.getByText('SPENT TIME (SECONDS)')).toBeInTheDocument();
  expect(screen.getByText('Update data')).toBeInTheDocument();
});

test('button can be clicked', () => {
  render(<App />);
  const button = screen.getByText('Update data');
  fireEvent.click(button);
});
