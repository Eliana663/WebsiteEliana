
import './index.css';
import { Footer }  from './Footer';
import { Routes, Route } from 'react-router-dom'
import Layout from "./pages/Layout";
import About from "./pages/About"
import Education from "./pages/Education"
import Projects from "./pages/Projects"
import Libraries from "./pages/Libraries"
import WorkExperience from "./pages/WorkExperience"
import Home from "./pages/Home"
import Default from "./pages/Default";
import background from "./assets/img/fondo1.jpg"
import './index.css';



function App() {
  return (
    
    
    <div id="contenedorPrincipal" style={{ backgroundImage: `url(${background})` }} className="Container">
    <div >
       <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home />}/>
           <Route path="about" element={<About />}/>
           <Route path="Education" element={<Education />}/>
           <Route path="Projects" element={<Projects />}/>
           <Route path="Libraries" element={<Libraries />}/>
           <Route path="WorkExperience" element={<WorkExperience />}/>
           <Route path="*" element={<Default />}/>
           </Route>
       
  
      </Routes>
      </div>


      <div>
        <Footer>
        </Footer>
    </div>
    </div>
    
  );
}

export default App;
