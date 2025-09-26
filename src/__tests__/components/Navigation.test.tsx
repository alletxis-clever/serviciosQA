import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation';

// Helper function to render with Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navigation Component', () => {
  test('renders all navigation links', () => {
    renderWithRouter(<Navigation />);

    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Stack Tecnológico')).toBeInTheDocument();
    expect(screen.getByText('Metodología')).toBeInTheDocument();
    expect(screen.getByText('Beneficios')).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    renderWithRouter(<Navigation />);

    expect(screen.getByRole('menuitem', { name: 'Ir a Inicio' })).toHaveAttribute(
      'href',
      '/'
    );
    expect(
      screen.getByRole('menuitem', { name: 'Ir a Servicios' })
    ).toHaveAttribute('href', '/services');
    expect(
      screen.getByRole('menuitem', { name: 'Ir a Stack Tecnológico' })
    ).toHaveAttribute('href', '/tech-stack');
  });

  test('renders as navigation element', () => {
    renderWithRouter(<Navigation />);

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });
});
