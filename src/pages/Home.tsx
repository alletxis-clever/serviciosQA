import React from 'react';
import { COMPANY_INFO, HOME_INFO_CARDS } from '../utils/constants';

const Home: React.FC = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        🌟 Propuesta de Servicios QA
                    </h1>
                    <p className="hero-description">
                        {COMPANY_INFO.description}
                    </p>
                    <p className="hero-approach">
                        {COMPANY_INFO.approach}
                    </p>
                </div>
            </section>

            <section className="home-info">
                <h2 className="section-title">💼 Nuestra Propuesta de Valor</h2>
                <div className="info-grid">
                    {HOME_INFO_CARDS.map((card, index) => (
                        <div key={index} className="info-card">
                            <div className="info-icon">{card.icon}</div>
                            <h3 className="info-title">{card.title}</h3>
                            <p className="info-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta">
                <h2 className="section-title">🚀 Servicios de QA</h2>
                <p className="cta-text">
                    Desde pruebas manuales hasta automatización y DevTestOps, tenemos la solución adecuada para sus necesidades.
                </p>
                <a href="/services" className="cta-button">Ver Todos los Servicios</a>
            </section>
        </div>
    );
};

export default Home;
