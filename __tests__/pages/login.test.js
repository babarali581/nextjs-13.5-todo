import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../src/pages/login';
import '@testing-library/jest-dom'

// Mock the useRouter hook from Next.js
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Login Page', () => {
  it('renders login form correctly', () => {
    render(<Login />);
    const usernameField = screen.getByPlaceholderText('Type your username');
    const passwordField = screen.getByPlaceholderText('Type your password');
    const loginButton = screen.getByText('LOGIN');
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('displays an error message when fields are empty', () => {
    render(<Login />);
    const loginButton = screen.getByText('LOGIN');
    fireEvent.click(loginButton);
    const errorMessage = screen.getByText('Please fill in all fields');
    expect(errorMessage).toBeInTheDocument();
  });

});
