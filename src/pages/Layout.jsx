import { Outlet, Link } from "react-router-dom";



const Layout = () => {
return <div class="layout">
         <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#483D8B'}}>
            <a class="navbar-brand" href="/">Eliana Torres</a>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
             <li class="nav-item active">
               <a class="nav-link" href="/">Home </a>
            </li>
             <li class="nav-item">
                 <a class="nav-link" href="about">Acerca de mi</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="Education">Educacion</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="Projects">Proyectos</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="Skills">Habilidades</a>
             </li>
             <li class="nav-item">
                 <a class="nav-link" href="WorkExperience">Experiencia Laboral</a>
             </li>
            </ul>
    
        </div>
</nav>
    <hr />
    <Outlet />

</div>;
}

export default Layout;