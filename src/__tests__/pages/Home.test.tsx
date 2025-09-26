import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Home Page', () => {
  test('renders hero section', () => {
    renderWithRouter(<Home />);

    expect(screen.getByText(/Propuesta de Servicios QA/i)).toBeInTheDocument();
  });

  test('renders info cards section', () => {
    renderWithRouter(<Home />);

    expect(screen.getByText(/Nuestra Propuesta de Valor/i)).toBeInTheDocument();
    expect(screen.getByText('Confianza')).toBeInTheDocument();
    expect(screen.getByText('Eficiencia')).toBeInTheDocument();
  });

  test('renders call to action section', () => {
    renderWithRouter(<Home />);

    expect(screen.getByText(/Servicios de QA/i)).toBeInTheDocument();
    expect(screen.getByText('Ver Todos los Servicios')).toBeInTheDocument();
  });

  test('CTA link has correct href', () => {
    renderWithRouter(<Home />);

    const ctaLink = screen.getByRole('link', {
      name: 'Ver Todos los Servicios',
    });
    expect(ctaLink).toHaveAttribute('href', '/services');
  });
});
