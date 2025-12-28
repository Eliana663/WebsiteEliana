import calcImg from '../assets/img/ImagenCalculadoraAvanzada.png';
import inicioImg from '../assets/img/IniciarSesion.png';
import macrosImg from '../assets/img/Macros.png';
import registroImg from '../assets/img/RegistrodeHabitos.png';
import paginaWebImg from '../assets/img/ProyectoPaginaWeb.png';
import buscadorAlim from '../assets/img/Buscador.png';
import calculadoraKeto from '../assets/img/CalculadoraKeto.png';
import './Projects.css';

import esJson from '../locales/es.json';
import enJson from '../locales/en.json';
import { useLanguage } from '../LanguageContext';

export const Projects = () => {
  const { lang } = useLanguage();
  const data = lang === 'es' ? esJson : enJson;

  // Asignar los imports correctos a cada proyecto
  const imagesMap = {
    'ImagenCalculadoraAvanzada.png': calcImg,
    'IniciarSesion.png': inicioImg,
    'Macros.png': macrosImg,
    'RegistrodeHabitos.png': registroImg,
    'ProyectoPaginaWeb.png': paginaWebImg,
    'Buscador.png': buscadorAlim,
    'CalculadoraKeto.png': calculadoraKeto
  };

  return (
    <div className="container my-5">
      <h1 className="titulos">{data.projectsSection.title}</h1>
      {data.projectsSection.projects.map((p, i) => (
        <div className="projects mb-5" key={i}>
          <h2>{p.title}</h2>
          <ul>
            <li><strong>{data.projectsSection.technologies}:</strong> {p.technologies.join(', ')}</li>
            <li>
              <strong>{data.projectsSection.repository}:</strong>{' '}
              {p.repository ? (
                <a href={p.repository} target="_blank" rel="noopener noreferrer">GitHub</a>
              ) : (
                data.projectsSection.underDevelopment
              )}
            </li>
            <li><strong>{data.projectsSection.description}:</strong> {p.description}</li>
            {p.images.length > 0 && (
              <li>
                <strong>{data.projectsSection.images}:</strong>
                <div className="imagenes-proyecto">
                  {p.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={imagesMap[img]}
                      alt={`${p.title} screenshot ${idx + 1}`}
                      className={`proyecto-img ${img === "Buscador.png" ? "proyecto-img-wide" : ""}`}
                    />
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};
