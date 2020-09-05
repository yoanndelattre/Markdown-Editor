import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders Markdown Editor title', () => {
  const {getByText} = render(<App />);
  const linkElement = getByText(/Markdown Editor/i);
  expect(linkElement).toBeInTheDocument();
});
