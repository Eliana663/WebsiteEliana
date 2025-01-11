
import './index.css';
import { Footer }  from './Footer';
import { Routes, Route } from 'react-router-dom'
import Layout from "./pages/Layout";
import About from "./pages/About"
import Education from "./pages/Education"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import WorkExperience from "./pages/WorkExperience"
import Home from "./pages/Home"
import Default from "./pages/Default";



function App() {
  return (
    <div className="Container">
       <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home />}/>
           <Route path="about" element={<About />}/>
           <Route path="Education" element={<Education />}/>
           <Route path="Projects" element={<Projects />}/>
           <Route path="Skills" element={<Skills />}/>
           <Route path="WorkExperience" element={<WorkExperience />}/>
           <Route path="*" element={<Default />}/>
           </Route>
       
      </Routes>
        <Footer>
        </Footer>
    </div>
  );
}

export default App;
