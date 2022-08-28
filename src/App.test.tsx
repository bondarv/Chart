import { fireEvent, render, screen } from '@testing-library/react';
import App, { INITIAL_DATA } from './App';

test('renders title and  button', () => {
  render(<App />);
  expect(screen.getByText('SPENT TIME (SECONDS)')).toBeInTheDocument();
  expect(screen.getByText('Update data')).toBeInTheDocument();
});

test('change time on click', () => {
  render(<App />);
  const button = screen.getByText('Update data');
  const value1 = screen.getByText(INITIAL_DATA[0].time);
  const value2 = screen.getByText(INITIAL_DATA[1].time);
  expect(value1).toHaveTextContent(INITIAL_DATA[0].time.toString());
  expect(value2).toHaveTextContent(INITIAL_DATA[1].time.toString());
  fireEvent.click(button);
  expect(value1).not.toHaveTextContent(INITIAL_DATA[0].time.toString());
  expect(value2).not.toHaveTextContent(INITIAL_DATA[1].time.toString());
});
