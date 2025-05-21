
import '../index.css';
import fotoEli from '../assets/img/fotoEli.png';

export const About = () => {
  return (
    <div id="about" className="container my-5" style={{ margin: "0 auto", maxWidth: "1800px", padding: "20px" }}>
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
            Soy una desarrolladora junior actualmente creando una aplicación web real para facilitar el
            seguimiento de la dieta cetogénica, usando Spring Boot, MySQL y React.
          </p>
          <p>
            Vengo del mundo de la administración, lo que me ha permitido desarrollar una mentalidad
            estructurada, orientada a la eficiencia y a la resolución de problemas reales. Tengo experiencia
            en el uso de herramientas ERP como SAP y Navision, lo que me ha dado una base sólida en la
            gestión de procesos empresariales.
          </p>
          <p>
            Me apasiona aprender y crear soluciones útiles. Busco una oportunidad que me permita obtener
            experiencia en el área tecnológica y aportar con responsabilidad.
          </p>

          <ul>
            <li>Estudiante de Máster en Java</li>
            <li>Licenciada en Administración (Comercio Internacional), con equivalencia reconocida en España</li>
            <li>Inglés profesional (C1)</li>
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