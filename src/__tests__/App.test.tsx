import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/CleverIT - Servicios de QA/i)).toBeInTheDocument();
  });

  test('renders navigation component', () => {
    render(<App />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  test('renders main content area', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
