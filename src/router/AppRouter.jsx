
import '../index.css';
import { Footer }  from '../Footer';
import { Routes, Route } from 'react-router-dom'
import Layout from "../components/Layout";
import {About, Timeline, Projects, Libraries, Home } from "../pages"
import background from "../assets/img/fondo1.jpg"




function AppRouter() {
  return (
    
    <>
    <div id="contenedorPrincipal" style={{ backgroundImage: `url(${background})` }} className="Container">
    <div >
       <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home />}/>
           <Route path="about" element={<About />}/>
           <Route path="Timeline" element={<Timeline />}/>
           <Route path="Projects" element={<Projects />}/>
           <Route path="Libraries" element={<Libraries />}/>
           <Route path="*" element={<Home />}/>
           </Route>
       
  
      </Routes>
      </div>


      <div>
        <Footer>
        </Footer>
    </div>
    </div>
    
    </>
  );
}

export default AppRouter;
