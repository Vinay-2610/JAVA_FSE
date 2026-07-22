import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cohort dashboard', () => {
  render(<App />);
  const headingElement = screen.getByText(/Cohort Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});
