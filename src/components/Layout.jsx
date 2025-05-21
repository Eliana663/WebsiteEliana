import { Outlet} from "react-router-dom";
import '../index.css';



const Layout = () => {
return  (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#252850', fontSize: '20px' }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">Eliana Torres</a>
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
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">Acerca de mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/timeline">Timeline</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">Proyectos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
);
}
export default Layout;