import { Outlet } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import es from "../locales/es.json";
import en from "../locales/en.json";
import '../index.css';

const Layout = () => {
  const { lang, toggleLang } = useLanguage();
  const t = lang === "es" ? es : en;

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#252850', fontSize: '40px', padding: '1rem 0' }}
      >
        <div className="container">
          <a className="navbar-brand" href="/" style={{ fontSize: '30px', fontWeight: '600', color: 'antiquewhite' }}>
            {t.brand}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ fontSize: '30px' }}>{t.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" style={{ fontSize: '30px' }}>{t.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/timeline" style={{ fontSize: '30px' }}>{t.timeline}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects" style={{ fontSize: '30px' }}>{t.projects}</a>
              </li>
              <li className="nav-item">
                <button onClick={toggleLang} style={{ fontSize: '20px', marginLeft: '1rem' }}>
                  {lang === "es" ? "EN" : "ES"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ padding: '2rem 1rem', fontSize: '18px', lineHeight: '1.6' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;