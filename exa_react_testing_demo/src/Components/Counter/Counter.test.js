import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

// Dies ist ein Komponenten-Test, da er das gesamte Verhalten der Counter-Komponente überprüft.
test('Renders counter component', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toBeInTheDocument();
});

// Dies ist ein Unit-Test, da er eine spezifische Funktion innerhalb der Komponente anhand der Komponente prüft.
test('Increments count on button click', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment');
    const countElement = screen.getByTestId('count');

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('1');

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent('2');
});

// Dies ist ein Unit-Test, da er eine spezifische Funktion anhand der Funktion prüft.
test('3 equals 3', () => {
    expect(3).toBe(3);
});
