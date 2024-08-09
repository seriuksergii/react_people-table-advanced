import './App.scss';
import { Outlet } from 'react-router-dom';

import { Navigation } from './components/Navigation';

export const App = () => {
  return (
    <div data-cy="app">
      <Navigation />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};