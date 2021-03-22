import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders header title', () => {
    render(<Home />);
    const visitedElement = screen.getByText(/visited/i);
    expect(visitedElement).toBeInTheDocument();
  });
