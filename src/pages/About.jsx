import '../index.css';
import fotoEli from '../assets/img/fotoEli.png';

export const About = () => {
  return (
    <div
      id="about"
      className="container my-5 about-text"
      style={{ margin: "0 auto", maxWidth: "1200px", padding: "20px" }}
    >
      <h1 className="titulos text-center">Acerca de mí...</h1>

      <div className="row align-items-center mb-5">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={fotoEli}
            alt="Foto Eliana"
            className="img-fluid rounded"
            style={{ maxHeight: '500px' }}
          />
        </div>

        <div className="col-md-7">
          <p>
            ✨ Actualmente desarrollo una aplicación web real para el seguimiento de la dieta cetogénica 🍳📊 usando Spring Boot, MySQL y React, como parte del proyecto final de mi Máster en Java. 
          </p>
          <p>
            📌 Con experiencia en administración y gestión de procesos, he desarrollado una mentalidad estructurada y orientada a la eficiencia, con conocimientos en ERP como SAP y Navision.
          </p>
          <p>
            🚀 Estoy lista para iniciar mi carrera en IT a través de prácticas profesionales, combinando mis habilidades administrativas con mi nueva faceta técnica. Mi objetivo: aprender, crecer y aportar valor desde el primer día.
          </p>

          <hr />

          <h3>🎓 Formación y certificaciones</h3>
          <ul>
            <li>🎓 Máster en Java (actualidad, proyecto práctico en desarrollo web)</li>
            <li>🎓 Licenciada en Administración (Comercio Internacional) con equivalencia en España</li>
            <li>📜 Certificado Profesional en Programación Web (Xunta de Galicia)</li>
            <li>🌍 Inglés profesional (C1)</li>
          </ul>

          <h3>💻 Tecnologías y herramientas</h3>
          <ul>
            <li>🎨 Frontend: HTML, CSS, JavaScript, React ⚛️, Bootstrap (nivel medio)</li>
            <li>⚙️ Backend: Java ☕, Spring Boot 🌱, Kotlin (nivel medio)</li>
            <li>🗄️ Bases de datos: MySQL</li>
            <li>🛠️ Herramientas: Git</li>
          </ul>
        </div>
      </div>

      <h2 className="mb-3">Conocimientos en lenguajes y tecnologías:</h2>
      <ul className="row list-unstyled">
        {[
          '(Medio) HTML',
          '(Medio) CSS',
          '(Medio) GitHub',
          '(Medio) Kotlin',
          '(Medio) Bootstrap',
          '(Bajo) SQL',
          '(Bajo) Java',
          '(Bajo) JavaScript',
          '(Bajo) React',
        ].map((item, index) => (
          <li key={index} className="col-6 col-md-4 mb-2">• {item}</li>
        ))}
      </ul>
    </div>
  );
};
