
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

    <p> Soy una desarrolladora junior actualmente creando una aplicación web real para facilitar el seguimiento de la dieta cetogénica, usando Spring Boot, MySQL y React.</p>

    <p> Vengo del mundo de la administración, lo que me ha permitido desarrollar una mentalidad estructurada, orientada a la eficiencia y a la resolución de problemas reales. Tengo experiencia en el uso de herramientas ERP como SAP y Navision, lo que me ha dado una base sólida en la gestión de procesos empresariales.</p>

    <p> Me apasiona aprender y crear soluciones útiles. Busco una oportunidad que me permita obtener experiencia en el área tecnológica y aportar con responsabilidad.</p>

   <ul>
    <li> Estudiante de Máster en Java </li>
    <li> Licenciada en Administración (Comercio Internacional), con equivalencia reconocida en España</li>
    <li> Inglés profesional (C1)</li>
   </ul>

      <pre></pre>
                
    <h2>Conocimientos en lenguajes y tecnologías: <pre> </pre></h2>

 
    <ul>
    <li>(Medio) HTML </li>
    <li>(Medio) CSS  </li>
    <li>(Medio) GitHub </li>
    <li>(Medio) Kotlin </li>
    <li>(Medio) Bootstrap </li>
    <li>(Bajo) SQL </li>
    <li>(Bajo) Java </li>
    <li>(Bajo )JavaScript </li>
    <li>(Bajo) SQL </li>
    <li>(Bajo) React </li>

    </ul>
  </div>

</>

  )
}

