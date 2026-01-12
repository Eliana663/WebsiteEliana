import React from 'react';
import calcImg from '../assets/img/ImagenCalculadoraAvanzada.png';
import inicioImg from '../assets/img/IniciarSesion.png';
import macrosImg from '../assets/img/Macros.png';
import registroImg from '../assets/img/RegistrodeHabitos.png';
import paginaWebImg from '../assets/img/ProyectoPaginaWeb.png';
import buscadorAlim from '../assets/img/Buscador.png';
import calculadoraKeto from '../assets/img/CalculadoraKeto.png';
import architecture from '../assets/img/Architecture.jpg'
import './Projects.css';

import esJson from '../locales/es.json';
import enJson from '../locales/en.json';
import { useLanguage } from '../LanguageContext';

export const Projects = () => {
  const { lang } = useLanguage();
  const data = lang === 'es' ? esJson : enJson;

  const imagesMap = {
    'ImagenCalculadoraAvanzada.png': calcImg,
    'IniciarSesion.png': inicioImg,
    'Macros.png': macrosImg,
    'RegistrodeHabitos.png': registroImg,
    'ProyectoPaginaWeb.png': paginaWebImg,
    'Buscador.png': buscadorAlim,
    'CalculadoraKeto.png': calculadoraKeto,
    'Architecture.jpg': architecture

  };

  return (
    <div className="container my-5">
      <h1 className="titulos">{data.projectsSection.title}</h1>
      
      {data.projectsSection.projects.map((p, i) => {
        // Debug para ver en consola si la demo existe en el objeto
        console.log(`Proyecto: ${p.title}, Demo URL:`, p.demo);

        return (
          <div className="projects mb-5" key={i}>
            <h2>{p.title}</h2>
            <ul>
  <li><strong>{data.projectsSection.technologies}:</strong> {p.technologies.join(', ')}</li>
  
  <li>
    <strong>{data.projectsSection.repository}:</strong>{' '}
    {Array.isArray(p.repository) ? (
      p.repository.map((link, idx) => (
        <span key={idx}>
          <a href={link} target="_blank" rel="noopener noreferrer">GitHub {idx + 1}</a>
          {idx < p.repository.length - 1 ? ' | ' : ''}
        </span>
      ))
    ) : (
      <a href={p.repository} target="_blank" rel="noopener noreferrer">GitHub</a>
    )}
  </li>

  {/* Lógica ultra-simplificada para la Demo */}
  {p["demo"] ? (
    <li>
      <strong>{data.projectsSection.demo || "Demo"}:</strong>{' '}
      <a 
        href={p["demo"]} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ fontWeight: 'bold', color: '#28a745', textDecoration: 'underline' }}
      >
        🚀 Ver Web en Vivo
      </a>
    </li>
  ) : null}

  <li><strong>{data.projectsSection.description}:</strong> {p.description}</li>
  
  {/* Sección de imágenes corregida */}
  {p.images && p.images.length > 0 && (
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
        );
      })}
    </div>
  );
};