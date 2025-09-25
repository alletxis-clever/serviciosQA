import React from 'react';
import { COMPANY_INFO } from '../utils/constants';

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">📞 Contactanos</h1>
                    <p className="hero-description">
                        ¿Listo para mejorar la calidad de tu software? 
                        Hablemos sobre cómo podemos ayudarte.
                    </p>
                </div>
            </section>
            
            <section className="contact-info">
                <div className="contact-container">
                    <div className="contact-card">
                        <h2>📧 Email</h2>
                        <p>{COMPANY_INFO.email}</p>
                    </div>
                    <div className="contact-card">
                        <h2>📱 Teléfono</h2>
                        <p>{COMPANY_INFO.phone}</p>
                    </div>
                    <div className="contact-card">
                        <h2>🏢 Empresa</h2>
                        <p>{COMPANY_INFO.name}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;