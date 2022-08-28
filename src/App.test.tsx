import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import App, { INITIAL_DATA, INTERVAL_TIME } from './App';

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  cleanup();
});

test('renders title and  button', () => {
  render(<App />);
  expect(screen.getByText('SPENT TIME (SECONDS)')).toBeInTheDocument();
  expect(screen.getByText('Update data')).toBeInTheDocument();
});

test('change time on click', () => {
  render(<App />);
  const button = screen.getByText('Update data');
  const time = INITIAL_DATA[0].time;
  const value = screen.getAllByText(time);
  value.forEach((element) =>
    expect(element).toHaveTextContent(time.toString())
  );
  fireEvent.click(button);
  value.forEach((element) =>
    expect(element).not.toHaveTextContent(time.toString())
  );
});

test('change time on INTERVAL_TIME', () => {
  render(<App />);
  const time = INITIAL_DATA[0].time;
  const value = screen.getAllByText(time);
  value.forEach((element) =>
    expect(element).toHaveTextContent(time.toString())
  );
  act(() => {
    jest.advanceTimersByTime(INTERVAL_TIME);
  });
  value.forEach((element) =>
    expect(element).not.toHaveTextContent(time.toString())
  );
});
