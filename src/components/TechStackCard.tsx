import React from 'react';
import { type TechStack } from '../utils/constants';

interface TechStackCardProps {
  techStack: TechStack;
  onClick: (techStack: TechStack) => void;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ techStack, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(techStack);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(techStack);
  };

  return (
    <div 
      className="tech-stack-card"
      style={{ backgroundColor: techStack.backgroundColor }}
      onClick={handleClick}
    >
      <div className="tech-stack-card-content">
        <div className="tech-stack-icon">{techStack.icon}</div>
        <div className="tech-stack-info">
          <h3 className="tech-stack-title">{techStack.title}</h3>
          <p className="tech-stack-description">{techStack.description}</p>
        </div>
        <button className="tech-stack-button" onClick={handleButtonClick}>
          Ver detalles
          <span className="tech-stack-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default TechStackCard;