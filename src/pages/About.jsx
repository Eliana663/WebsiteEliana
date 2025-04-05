
import '../index.css';
import fotoEli from '../assets/img/fotoEli.png'

export const About = () => {
  
  return (
  <>
  
  <div id="about">
    <h1 className="titulos">Acerca de mi...</h1>

     <img id="fotoEli"
                src={fotoEli}
                alt="Foto Eliana"
                height="500px"
                width="560x" />  

    <p> Aunque cuento una sólida formación en administración y comercio internacional, en 2024  decidí dar un giro a mi carrera para adentrarme en nuevos rumbos: Desarrollo Web. Al día de hoy me encuentro realizando un máster en programación Java e hice un curso de desarrollo de aplicaciones.</p>

    <p>Me encanta aprender cada día algo nuevo y me encuentro abierta a nuevas oportunidades que me ayuden a desarrollar mis destrezas en el sector tecnológico.</p>

    <pre> </pre>
         
                
    <h2>Conocimientos en lenguajes y tecnologías: <pre> </pre></h2>

 
    <ul>
    <li>(Medio) HTML </li>
    <li>(Medio) CSS  </li>
    <li>(Medio) GitHub </li>
    <li>(Bajo) SQL </li>
    <li>(Bajo) Java </li>
    <li>(Bajo )JavaScript </li>
    <li>(Bajo) SQL </li>
    <li> (Bajo) React </li>

    </ul>
  </div>

</>

  )
}

