import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Dashboard from '../../src/pages/dashboard';
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Dashboard Component', () => {
  let pushMock = jest.fn();
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: pushMock
    });
    // Mocking localStorage
    Storage.prototype.removeItem = jest.fn();
  });

  it('renders the provided username', () => {
    render(<Dashboard username="JohnDoe" />);
    expect(screen.getByText(/Welcome, JohnDoe!/)).toBeInTheDocument();
  });

  it('handles logout correctly', () => {
    render(<Dashboard username="JohnDoe" />);
    fireEvent.click(screen.getByText(/Logout/));
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(pushMock).toHaveBeenCalledWith('/login');
  });
});
