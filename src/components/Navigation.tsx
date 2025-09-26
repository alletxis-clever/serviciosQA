import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../utils/constants';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav
      className="navigation"
      role="navigation"
      aria-label="Navegación principal"
    >
      <ul className="nav-list" role="menubar">
        {NAVIGATION_ITEMS.map(item => (
          <li key={item.path} className="nav-item" role="none">
            <Link
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? 'active' : ''
              }`}
              role="menuitem"
              aria-current={
                location.pathname === item.path ? 'page' : undefined
              }
              aria-label={`Ir a ${item.label}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
