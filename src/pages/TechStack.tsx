import React, { useState } from 'react';
import { TECH_STACKS, type TechStack as TechStackType } from '../utils/constants';
import TechStackCard from '../components/TechStackCard';
import TechStackModal from '../components/TechStackModal';

const TechStack: React.FC = () => {
  const [selectedTechStack, setSelectedTechStack] = useState<TechStackType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTechStackClick = (techStack: TechStackType) => {
    setSelectedTechStack(techStack);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTechStack(null);
  };

  return (
    <div className="tech-stack">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">🛠️ Stack Tecnológico</h1>
          <p className="hero-description">
            Conoce nuestras herramientas, tecnologías y metodologías especializadas 
            para cada área de Quality Assurance. Haz clic en cualquier categoría 
            para ver todos los detalles.
          </p>
        </div>
      </section>

      <section className="tech-stack-section">
        <div className="tech-stack-container">
          <div className="tech-stack-grid">
            {TECH_STACKS.map((techStack) => (
              <TechStackCard
                key={techStack.id}
                techStack={techStack}
                onClick={handleTechStackClick}
              />
            ))}
          </div>
        </div>
      </section>

      <TechStackModal
        techStack={selectedTechStack}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TechStack;