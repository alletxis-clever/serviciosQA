import React from 'react';
import { COMPANY_INFO } from '../utils/constants';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <div className="logo-icon">🔧</div>
                    <h1 className="logo-text">{COMPANY_INFO.name}</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;