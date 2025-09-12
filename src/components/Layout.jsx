import { Outlet } from "react-router-dom";
import '../index.css';

const Layout = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#252850', fontSize: '40px', padding: '1rem 0' }}
      >
        <div className="container">
          <a className="navbar-brand" href="/" style={{ fontSize: '30px', fontWeight: '600', color: 'antiquewhite' }}>
            Eliana Torres
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
                <a className="nav-link" href="/" style={{ fontSize: '30px' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" style={{ fontSize: '30px' }}>Acerca de mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/timeline" style={{ fontSize: '30px' }}>Timeline</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects" style={{ fontSize: '30px' }}>Proyectos</a>
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
