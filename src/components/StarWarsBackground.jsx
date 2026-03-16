import React from 'react';
import './StarWarsBackground.css';
import galaxyImage from '../assets/img/StarWars2.jpg'

// Añadimos showCrawl como parámetro
export const StarWarsBackground = ({ showCrawl = true }) => {
  return (
    <div className="galaxy-container">
      <div 
        className="galaxy-image" 
        style={{ backgroundImage: `url(${galaxyImage})` }}
      ></div>
      
      {/* Solo si showCrawl es true, se renderiza el texto animado */}
      {showCrawl && (
        <div className="crawl-wrapper">
          <div className="crawl-content">
            <p className="episode">EPISODIO I</p>
            <h1 className="title">LA FUERZA DEL CÓDIGO</h1>
            <p className="story">
              En un rincón remoto de la web, <br/>
              un desarrollador intenta hacerse con el mando. <br/><br/>
              Con React como aliado y Bootstrap como escudo, <br/>
              la galaxia entera espera su creación...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
