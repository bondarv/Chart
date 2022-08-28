import { render, screen } from '@testing-library/react';
import { INITIAL_DATA } from '../../App';
import { ChartBar } from './ChartBar';

test('renders initial data', () => {
  render(<ChartBar data={INITIAL_DATA} />);
  INITIAL_DATA.forEach((item) =>
    expect(screen.getByText(item.name)).toBeInTheDocument()
  );
});

test('should display the blue color when the time is displayed', () => {
  render(<ChartBar data={INITIAL_DATA} />);
  INITIAL_DATA.forEach((item) =>
    expect(screen.getByText(item.time)).toHaveStyle('background-color: #30d5c8')
  );
});
