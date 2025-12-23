import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import './timetable.css';
import './flags.css';
import { useLanguage } from '../../LanguageContext';

// Importamos los JSON
import timetableEs from '../../locales/es.json';
import timetableEn from '../../locales/en.json';

export function Timetable() {
  const { lang } = useLanguage();

  // Seleccionamos los eventos según el idioma
  const events = lang === 'es' 
    ? timetableEs.timetableSection 
    : timetableEn.timetableSection;

  // Detectamos ancho de pantalla para cambiar alineación del timeline
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const customizedMarker = (item) => (
    <span className="custom-marker" style={{ backgroundColor: item.color }}>
      <i className={item.icon}></i>
    </span>
  );

  const customizedContent = (item) => (
    <Card title={item.status} className="card-custom">
      {item.image && (
        <img
          src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
          alt={item.name}
          className="card-image"
        />
      )}
      <ul>
        {item.Organization && <li>{item.Organization}</li>}
        <li>{item.Beggining} - {item.Ending}</li>
        <li>{item.Title}</li>
      </ul>
    </Card>
  );

  return (
    <div className="timetable-container">
      <Timeline
        value={events}
        align={isMobile ? 'left' : 'alternate'}
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  );
}
