import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../components/Sidebar';

describe('Sidebar Component', () => {
  it('renders all menu items', () => {
    render(<Sidebar />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Activities')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  });

  it('highlights selected menu item', () => {
    render(<Sidebar />);
    
    // Dashboard should be active by default
    expect(screen.getByText('Dashboard').parentElement).toHaveClass('bg-white');
    
    // Click on Programs
    fireEvent.click(screen.getByText('Programs'));
    expect(screen.getByText('Programs').parentElement).toHaveClass('bg-white');
    expect(screen.getByText('Dashboard').parentElement).not.toHaveClass('bg-white');
  });

  it('displays help section', () => {
    render(<Sidebar />);
    expect(screen.getByText('Got some questions, enquiries or need help?')).toBeInTheDocument();
    expect(screen.getByText('Visit Membership Help Desk')).toBeInTheDocument();
  });
});