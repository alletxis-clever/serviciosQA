import React from 'react';
import { QAService } from '../utils/constants';

interface ServiceCardProps {
  service: QAService;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  featured = false,
}) => {
  const { title, description, team, tools, includes, benefits } = service;

  return (
    <div className={`service-card ${featured ? 'featured' : ''}`}>
      <div className="service-header">
        <h3 className="service-title">{title}</h3>
        <div className="team-info">
          <span className="team-count">{team.count}</span>
        </div>
      </div>

      <p className="service-description">{description}</p>

      <div className="service-details">
        <div className="detail-section">
          <h4>👥 Equipo</h4>
          <ul className="roles-list">
            {team.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h4>🛠️ Herramientas</h4>
          <ul className="tools-list">
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h4>✅ Incluye</h4>
          <ul className="includes-list">
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {benefits && (
          <div className="detail-section benefits">
            <h4>🚀 Beneficios</h4>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="service-footer">
        <button
          className="cta-button"
          aria-label={`Solicitar información sobre ${title}`}
          type="button"
        >
          Solicitar información
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
