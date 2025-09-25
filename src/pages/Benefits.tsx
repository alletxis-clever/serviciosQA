import React from 'react';
import { COMPANY_BENEFITS } from '../utils/constants';

const Benefits: React.FC = () => {
    return (
        <div className="benefits-page">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Beneficios para Nuestros Clientes</h1>
                    <p className="hero-subtitle">
                        Descubre cómo nuestros servicios de QA transforman tu negocio y mejoran la calidad de tu software.
                    </p>
                </div>
            </section>

            <section className="benefits">
                <div className="benefits-grid">
                    {COMPANY_BENEFITS.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Benefits;