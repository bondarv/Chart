import { render, screen } from '@testing-library/react';
import { INITIAL_DATA } from '../App';
import { ChartBar } from './ChartBar';

test('renders initial data', () => {
  render(<ChartBar data={INITIAL_DATA} />);
  expect(screen.getByText('Landing Page')).toBeInTheDocument();
  expect(screen.getByText('Configurator')).toBeInTheDocument();
  expect(screen.getByText('Check-out')).toBeInTheDocument();
  expect(screen.getByText('Deal')).toBeInTheDocument();
});

test('should render right color', () => {
  render(<ChartBar data={INITIAL_DATA} />);
  expect(screen.getByText('7.4')).toHaveStyle('background-color: blue');
  expect(screen.getByText('0.2')).toHaveStyle('background-color: blue');
  expect(screen.getByText('7')).toHaveStyle('background-color: blue');
  expect(screen.getByText('3.8')).toHaveStyle('background-color: blue');
});
