import React, { useState } from 'react';
import { QAService } from '../utils/constants';
import ServiceCarousel from '../components/ServiceCarousel';
import ServiceModal from '../components/ServiceModal';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<QAService | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: QAService) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="services">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">🚀 Nuestros Servicios de QA</h1>
          <p className="hero-description">
            Ofrecemos una gama completa de servicios de Quality Assurance. Haz
            clic en cualquier servicio para ver todos los detalles.
          </p>
        </div>
      </section>

      <section className="services-carousel-section">
        <div className="services-container">
          <ServiceCarousel onServiceClick={handleServiceClick} />
        </div>
      </section>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Services;
