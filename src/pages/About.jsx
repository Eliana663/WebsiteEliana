import '../index.css';
import fotoEli from '../assets/img/fotoEli.png';
import aboutJsonEs from '../locales/es.json';
import aboutJsonEn from '../locales/en.json';
import { useLanguage } from '../LanguageContext';

export const About = () => {
  const { lang } = useLanguage();

  // Elegimos el JSON según el idioma
  const about = lang === 'es' ? aboutJsonEs.aboutSection : aboutJsonEn.aboutSection;

  return (
    <div id="about" className="container-fluid my-5 about-text" style={{ padding: '20px' }}>
      <h1 className="titulos text-center mb-4">{about.title}</h1>

      <div
        className="d-flex flex-column flex-md-row align-items-start mb- w-100 mx-auto"
        style={{ maxWidth: '1400px' }}
      >
        <div className="me-md-4 mb-3 mb-md-0" style={{ flexShrink: 0 }}>
          <img
            src={fotoEli}
            alt="Foto Eliana"
            className="img-fluid rounded"
            style={{ width: '500px', height: 'auto' }}
          />
        </div>

        <div className="flex-grow-1">
          {about.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <hr />

      <div className="mx-auto" style={{ maxWidth: '1200px', width: '100%', textAlign: 'justify' }}>
        <h3 className="titulos text-center mb-4" style={{ fontSize: '50px' }}>
          {about.educationTitle}
        </h3>
        <ul>
          {about.education.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="titulos text-center mb-4" style={{ fontSize: '50px', marginTop: '50px' }}>
          {about.skillsTitle}
        </h3>
        <ul>
          {about.skills.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
