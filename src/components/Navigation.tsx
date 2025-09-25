import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../utils/constants';

const Navigation: React.FC = () => {
    const location = useLocation();
    
    return (
        <nav className="navigation">
            <ul className="nav-list">
                {NAVIGATION_ITEMS.map((item) => (
                    <li key={item.path} className="nav-item">
                        <Link 
                            to={item.path} 
                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
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