import '../index.css';
import fotoEli from '../assets/img/fotoEli.png';

export const About = () => {
  return (
    <div
      id="about"
      className="container-fluid my-5 about-text"
      style={{ padding: "20px" }}
    >
      <h1 className="titulos text-center mb-4">Acerca de mí...</h1>

      
      <div className="d-flex flex-column flex-md-row align-items-start mb- w-100 mx-auto" style={{ maxWidth: '1400px' }}>
       
        <div className="me-md-4 mb-3 mb-md-0" style={{ flexShrink: 0 }}>
          <img src={fotoEli} alt="Foto Eliana" className="img-fluid rounded" style={{ width: '500px', height: 'auto' }} />
        </div>

        
        <div className="flex-grow-1">
          <p>
            ✨ Actualmente desarrollo una aplicación web real para el seguimiento de la dieta cetogénica 🍳📊 usando Spring Boot, MySQL y React, como parte del proyecto final de mi Máster en Java. 
          </p>
          <p>
            📌 Con experiencia en administración y entornos internacionales en inglés, combino habilidades técnicas y comunicativas para aportar valor desde el primer día.
          </p>
          <p>
            🚀 Estoy lista para iniciar mi carrera en IT a través de prácticas profesionales, combinando mis habilidades administrativas con mi nueva faceta técnica. Mi objetivo: aprender, crecer y aportar valor desde el primer día.
          </p>
        </div>
      </div>

      
      <hr />

      <div id="about" className="mx-auto" style={{ maxWidth: '1200px', width: '100%', textAlign: 'justify' }}>
        <h3 className="titulos text-center mb-4" style={{ fontSize: '50px'}}>🎓 Formación y certificaciones</h3>
        <ul>
          <li>Máster en Java (actualidad, proyecto práctico en desarrollo web)</li>
          <li>Licenciada en Administración (Comercio Internacional) con equivalencia en España</li>
          <li>Certificado Profesional en Programación Web (Xunta de Galicia)</li>
          <li>Inglés profesional (C1)</li>
        </ul>

        <h3  className="titulos text-center mb-4" style={{ fontSize: '50px', marginTop: '50px'}}>💻 Tecnologías y herramientas (nivel medio) </h3>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, React ⚛️, Bootstrap </li>
          <li>Backend: Java ☕, Spring Boot 🌱, Kotlin </li>
          <li>Bases de datos: MySQL</li>
          <li>Herramientas: Git</li>
        </ul>

        </div>
    </div>
  );
};
