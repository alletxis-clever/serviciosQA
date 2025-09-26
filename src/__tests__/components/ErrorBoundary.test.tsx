import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../../components/ErrorBoundary';

// Componente que lanza error para testing
const ThrowError = ({ shouldError }: { shouldError: boolean }) => {
  if (shouldError) {
    throw new Error('Test error for ErrorBoundary');
  }
  return <div>No error here</div>;
};

describe('ErrorBoundary', () => {
  test('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldError={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error here')).toBeInTheDocument();
  });

  test('renders error UI when there is an error', () => {
    // Suppress console.error for this test
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldError={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Algo salió mal/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Lo sentimos, ha ocurrido un error inesperado/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Recargar página')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  test('renders custom fallback when provided', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const customFallback = <div>Custom error message</div>;

    render(
      <ErrorBoundary fallback={customFallback}>
        <ThrowError shouldError={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();
    expect(screen.queryByText(/Algo salió mal/i)).not.toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  test('shows error details in development mode', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldError={true} />
      </ErrorBoundary>
    );

    expect(
      screen.getByText('Detalles técnicos (para desarrolladores)')
    ).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
