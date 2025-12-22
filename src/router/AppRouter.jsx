
import '../index.css';
import { Footer }  from '../Footer';
import { Routes, Route } from 'react-router-dom'
import Layout from "../components/Layout";
import {About, Timeline, Projects, Home } from "../pages"






function AppRouter() {
  return (
    
    <>
    <div id="contenedorPrincipal" >
    
    <div >
       <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home />}/>
           <Route path="about" element={<About />}/>
           <Route path="Timeline" element={<Timeline />}/>
           <Route path="Projects" element={<Projects />}/>
           <Route path="*" element={<Home />}/>
        </Route>
       
  
      </Routes>
        <div>
           <Footer>
           </Footer>
        </div>
          
      </div>
    </div>
     
    
    </>
  );
}

export default AppRouter;
