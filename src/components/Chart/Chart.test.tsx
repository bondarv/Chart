import { render, screen } from '@testing-library/react';
import { INITIAL_DATA } from '../../App';
import { Chart } from './Chart';

test('renders initial data', () => {
  render(<Chart data={INITIAL_DATA} />);
  INITIAL_DATA.forEach((item) =>
    expect(screen.getByText(item.name)).toBeInTheDocument()
  );
});

test('should display the blue color when the time is displayed', () => {
  render(<Chart data={INITIAL_DATA} />);
  INITIAL_DATA.forEach((item) =>
    screen
      .getAllByText(item.time)
      .forEach((element) =>
        expect(element.parentElement).toHaveStyle('background-color: #30d5c8')
      )
  );
});
