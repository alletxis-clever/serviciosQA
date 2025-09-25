import React from 'react';
import { type TechStack } from '../utils/constants';

interface TechStackModalProps {
  techStack: TechStack | null;
  isOpen: boolean;
  onClose: () => void;
}

const TechStackModal: React.FC<TechStackModalProps> = ({ techStack, isOpen, onClose }) => {
  if (!isOpen || !techStack) return null;

  // Función para obtener icono según la categoría
  const getCategoryIcon = (category: string): string => {
    const iconMap: { [key: string]: string } = {
      'Tipos de pruebas': '🔍',
      'Lenguaje': '💻',
      'Automations Test': '🤖',
      'Herramientas de Test Management': '📋',
      'Librerías': '📚',
      'Herramientas de Api testing': '🔗',
      'Base de Datos': '🗄️',
      'Tipos de Pruebas': '📊',
      'Herramientas': '🛠️',
      'Actividades': '⚙️',
      'Herramientas de CI/CD': '🚀',
      'Servicios': '📈',
      '¿Por qué TMAP?': '✨',
      'Beneficio clave': '🌐',
      'Marco TMAP': '📋'
    };
    return iconMap[category] || '🔧';
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content tech-stack-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-hero">
            <span className="modal-hero-icon">{techStack.icon}</span>
            <h2 className="modal-title">{techStack.title}</h2>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <p className="modal-subtitle">{techStack.description}</p>
          
          <div className="tech-stack-details">
            {techStack.details.map((detail, index) => (
              <div key={index} className="tech-detail-section">
                <h3 className="tech-detail-title">
                  <span className="tech-detail-icon">{getCategoryIcon(detail.category)}</span>
                  {detail.category}
                </h3>
                <div className="tech-detail-items">
                  {detail.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="tech-detail-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackModal;