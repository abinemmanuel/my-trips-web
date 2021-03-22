import { render, screen } from '@testing-library/react';
import About from './About';

test('renders header title', () => {
    render(<About />);
    const headerElement = screen.getByText(/My Trips React Web Application/i);
    expect(headerElement).toBeInTheDocument();
  });
