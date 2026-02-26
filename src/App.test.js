// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BackendForge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BackendForge/i);
    expect(titleElement).toBeInTheDocument();
});
