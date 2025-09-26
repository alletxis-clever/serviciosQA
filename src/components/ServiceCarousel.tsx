import React, { useState } from 'react';
import { QA_SERVICES } from '../utils/constants';
import { QAService } from '../utils/constants';

interface ServiceCarouselProps {
  onServiceClick: (service: QAService) => void;
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
  onServiceClick,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Página 0: servicios 0,1,2 (primeros 3)
  // Página 1: servicios 3,4 (últimos 2)
  const getServicesForPage = (page: number) => {
    if (page === 0) {
      return QA_SERVICES.slice(0, 3); // Servicios 1, 2, 3
    } else {
      return QA_SERVICES.slice(3, 5); // Servicios 4, 5
    }
  };

  const nextSlide = () => {
    setCurrentPage(prevPage => (prevPage === 0 ? 1 : prevPage));
  };

  const prevSlide = () => {
    setCurrentPage(prevPage => (prevPage === 1 ? 0 : prevPage));
  };

  return (
    <div className="service-carousel">
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={prevSlide}
        disabled={currentPage === 0}
        aria-label="Ver servicios anteriores"
        type="button"
        tabIndex={currentPage === 0 ? -1 : 0}
      >
        &#8249;
        <span className="sr-only">Anterior</span>
      </button>

      <div className="service-carousel-container">
        <div
          className="service-carousel-wrapper"
          style={{
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {getServicesForPage(currentPage).map((service, idx) => (
            <div
              key={service.id}
              className="service-carousel-card"
              style={{ backgroundColor: service.backgroundColor }}
              onClick={() => onServiceClick(service)}
            >
              <div className="service-card-header">
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <div className="service-card-content">
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-card-footer">
                <div className="service-card-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={nextSlide}
        disabled={currentPage === 1}
        aria-label="Ver siguientes servicios"
        type="button"
        tabIndex={currentPage === 1 ? -1 : 0}
      >
        &#8250;
        <span className="sr-only">Siguiente</span>
      </button>

      <div
        className="carousel-indicators"
        role="tablist"
        aria-label="Indicadores de páginas de servicios"
      >
        <button
          className={`indicator ${currentPage === 0 ? 'active' : ''}`}
          onClick={() => setCurrentPage(0)}
          aria-label="Ir a la primera página de servicios"
          aria-selected={currentPage === 0}
          role="tab"
          type="button"
        ></button>
        <button
          className={`indicator ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => setCurrentPage(1)}
          aria-label="Ir a la segunda página de servicios"
          aria-selected={currentPage === 1}
          role="tab"
          type="button"
        ></button>
      </div>
    </div>
  );
};

export default ServiceCarousel;
