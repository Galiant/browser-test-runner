import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test runner heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: 'Test Runner' });
  expect(heading).toBeInTheDocument();
});
