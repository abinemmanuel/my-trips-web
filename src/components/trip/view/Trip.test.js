import { render, screen } from '@testing-library/react';
import Trip from './Trip';

test('renders header title', () => {
    const tripInput = {
        name:'Test Trip',
        status: 'COMPLETED',
        startDate: new Date().toDateString()
    };
    render(<Trip trip={tripInput} />);
    const statusElement = screen.getByText(tripInput.status);
    expect(statusElement).toBeInTheDocument();
  });
