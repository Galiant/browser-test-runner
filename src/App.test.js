import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

test('renders test runner heading', () => {
  const heading = screen.getByRole('heading', { name: 'Test Runner' });
  expect(heading).toBeInTheDocument();
});

test('renders Start and Refresh button', () => {
  const startButton = screen.getByRole('button', { name: 'Start' });
  const refreshButton = screen.getByRole('button', { name: 'Refresh' });
  expect(startButton).toBeInTheDocument();
  expect(refreshButton).toBeInTheDocument();
});
