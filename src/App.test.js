import { render, screen } from '@testing-library/react';
import AppContainer from './App';
import { createRoot } from 'react-dom/client';

test('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<AppContainer />);
  root.unmount();
});
