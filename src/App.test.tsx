import { render, screen } from '@testing-library/react';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/golden gobl inn/i);
  expect(linkElement).toBeInTheDocument();
});
