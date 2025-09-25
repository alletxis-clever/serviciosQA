import React from 'react';
import { QAService } from '../utils/constants';
import ToolsCarousel from './ToolsCarousel';

interface ServiceModalProps {
  service: QAService | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Función para obtener el icono específico de cada herramienta
  const getToolIcon = (toolText: string) => {
    const text = toolText.toLowerCase();
    if (text.includes('cypress')) return '🧪';
    if (text.includes('selenium')) return '🌐';
    if (text.includes('appium')) return '📱';
    if (text.includes('restassured') || text.includes('postman')) return '🔗';
    if (text.includes('jmeter') || text.includes('k6')) return '⚡';
    if (text.includes('jira') || text.includes('zephyr')) return '📋';
    if (text.includes('azure') || text.includes('devops')) return '☁️';
    if (text.includes('burp') || text.includes('snyk')) return '🔒';
    if (text.includes('browserstack')) return '🌐';
    if (text.includes('docker') || text.includes('kubernetes')) return '🐳';
    if (text.includes('jenkins') || text.includes('github')) return '🔄';
    if (text.includes('sonar')) return '📊';
    if (text.includes('testim') || text.includes('mabl') || text.includes('functionize')) return '🤖';
    if (text.includes('applitools')) return '👁️';
    if (text.includes('chatgpt') || text.includes('ai')) return '🧠';
    if (text.includes('mlflow') || text.includes('tensorflow')) return '🔬';
    return '🔧';
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
          <div className="modal-hero" style={{ backgroundColor: service.backgroundColor }}>
            <div className="modal-hero-icon">{service.icon}</div>
            <h2 className="modal-title">{service.title}</h2>
            <p className="modal-subtitle">{service.description}</p>
          </div>
        </div>
        
        <div className="modal-body">
          {/* Layout en filas organizadas verticalmente */}
          <div className="modal-rows-layout">
            
            {/* Fila 1: Equipo & Roles */}
            <div className="modal-row">
              <div className="row-header">
                <div className="row-icon">👥</div>
                <h3 className="row-title">Equipo & Roles</h3>
              </div>
              <div className="row-content">
                {service.team.roles.map((role, index) => (
                  <div key={index} className="role-item">
                    <div className="role-check">✅</div>
                    <div className="role-details">
                      <div className="role-title">{role.split('(')[0]}</div>
                      <div className="role-description">{role.includes('(') ? `(${role.split('(')[1]}` : ''}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fila 2: Herramientas */}
            <div className="modal-row">
              <div className="row-header">
                <div className="row-icon">⚙️</div>
                <h3 className="row-title">Herramientas</h3>
              </div>
              <div className="row-content">
                <ToolsCarousel 
                  tools={service.tools}
                  getToolIcon={getToolIcon}
                />
              </div>
            </div>

            {/* Fila 3: Incluye */}
            <div className="modal-row">
              <div className="row-header">
                <div className="row-icon">🎯</div>
                <h3 className="row-title">Incluye</h3>
              </div>
              <div className="row-content">
                <div className="includes-grid">
                  {service.includes.map((item, index) => (
                    <div key={index} className="include-item">
                      <div className="include-check">✅</div>
                      <div className="include-text">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fila 4: KPIs de Medición */}
            <div className="modal-row">
              <div className="row-header">
                <div className="row-icon">📊</div>
                <h3 className="row-title">KPIs de Medición</h3>
              </div>
              <div className="row-content">
                <div className="kpi-cards">
                  {service.kpis.map((kpi, index) => (
                    <div key={index} className="kpi-card">
                      <div className="kpi-card-icon" style={{ color: kpi.color }}>{kpi.icon}</div>
                      <div className="kpi-card-content">
                        <div className="kpi-card-title">{kpi.title}</div>
                        <div className="kpi-card-desc">{kpi.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;