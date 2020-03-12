import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Markdown Translator title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Markdown Translator/i);
  expect(linkElement).toBeInTheDocument();
});