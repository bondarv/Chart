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
  const value = screen.getAllByText(INITIAL_DATA[0].time);
  value.forEach((element) =>
    expect(element).toHaveTextContent(INITIAL_DATA[0].time.toString())
  );
  fireEvent.click(button);
  value.forEach((element) =>
    expect(element).not.toHaveTextContent(INITIAL_DATA[0].time.toString())
  );
});
