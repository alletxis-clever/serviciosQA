import React, { useState } from 'react';

interface Tool {
  text: string;
  icon: string;
}

interface ToolsCarouselProps {
  tools: string[];
  getToolIcon: (toolText: string) => string;
}

const ToolsCarousel: React.FC<ToolsCarouselProps> = ({ tools, getToolIcon }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Procesar herramientas y crear páginas
  const processTools = (toolsArray: string[]): Tool[] => {
    return toolsArray.map(tool => ({
      text: tool,
      icon: getToolIcon(tool)
    }));
  };

  const processedTools = processTools(tools);
  const totalPages = Math.ceil(processedTools.length / 2); // 2 herramientas por página

  // Obtener herramientas para la página actual (2 por página)
  const getToolsForPage = (page: number) => {
    const startIndex = page * 2;
    const endIndex = startIndex + 2;
    return processedTools.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage((prev) => 
      prev === totalPages - 1 ? prev : prev + 1
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) => 
      prev === 0 ? prev : prev - 1
    );
  };

  return (
    <div className="tools-carousel">
      <button 
        className="tools-carousel-arrow tools-carousel-arrow-left" 
        onClick={prevPage}
        disabled={currentPage === 0}
        aria-label="Herramientas anteriores"
      >
        &#8249;
      </button>
      
      <div className="tools-carousel-container">
        <div 
          className="tools-carousel-wrapper"
          style={{ 
            transition: 'all 0.3s ease-in-out'
          }}
        >
          {getToolsForPage(currentPage).map((tool, idx) => (
            <div 
              key={`${currentPage}-${idx}`} 
              className="tool-carousel-card"
            >
              <div className="tool-card-icon">{tool.icon}</div>
              <h4 className="tool-card-title">{tool.text}</h4>
              <p className="tool-card-description">Herramienta especializada</p>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="tools-carousel-arrow tools-carousel-arrow-right" 
        onClick={nextPage}
        disabled={currentPage === totalPages - 1}
        aria-label="Siguientes herramientas"
      >
        &#8250;
      </button>
      
      <div className="tools-carousel-indicators">
        {Array.from({ length: totalPages }, (_, index) => (
          <span 
            key={index}
            className={`tools-indicator ${index === currentPage ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ToolsCarousel;