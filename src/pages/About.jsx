
import '../index.css';
import fotoEli from '../assets/img/fotoEli.png'

const About = () => {
  
  return (
  <>
  <div id="about">
  <h1 class="titulos">Acerca de mi</h1>

   <img id="fotoEli"
                src={fotoEli}
                alt="Foto Eliana"
                height="500px"
                width="530px" />  

    <p> Con una sólida formación en administración y negocio marítimo, cuento con una experiencia laboral de más de 10 años en negociaciones internacionales incluyendo amplios conocimientos técnicos en el proceso de compras e importaciones.</p>

    <p>Fue en 2024 cuando quise dar un giro a mi carrera para adentrarme en nuevos rumbos: Desarrollo Web. Al día de hoy me encuentro realizando un máster en programación Java e hice un curso de desarrollo de aplicaciones.</p>

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

export default About;