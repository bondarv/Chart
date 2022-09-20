import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import App, { INITIAL_DATA, INTERVAL_TIME } from './App';

const time = INITIAL_DATA[0].time;
const textContent = time.toString();

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
  const value = screen.getAllByText(time);
  value.forEach((element) => expect(element).toHaveTextContent(textContent));
  fireEvent.click(button);
  value.forEach((element) =>
    expect(element).not.toHaveTextContent(textContent)
  );
});

test('change time on INTERVAL_TIME', async () => {
  render(<App />);
  const value = screen.getAllByText(time);
  value.forEach((element) => expect(element).toHaveTextContent(textContent));
  await waitFor(
    () =>
      value.forEach((element) =>
        expect(element).not.toHaveTextContent(textContent)
      ),
    { timeout: INTERVAL_TIME + 1 }
  );
});
