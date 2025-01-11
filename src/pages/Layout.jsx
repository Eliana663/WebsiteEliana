import { Outlet, Link } from "react-router-dom";

const Layout = () => {
return <div>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">Acerca de</Link>
            </li>
            <li>
                <Link to="/Education">Educacion</Link>
            </li>
            <li>
                <Link to="/Projects">Proyectos</Link>
            </li>
            <li>
                <Link to="/Skills">Habilidades</Link>
            </li>
            <li>
                <Link to="/WorkExperience"> Experiencia Laboral</Link>
            </li>


        </ul>
    </nav>
    <hr />
    <Outlet />

</div>;
}

export default Layout;