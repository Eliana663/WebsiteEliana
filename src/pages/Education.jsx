import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../index.css';

const Education = () => {
  return (
  <>
  <h1 class="titulos">Educación</h1>
  <div class="educacion">
     <h2 >Relacionadas con Desarrollo web</h2> 
       <div class="estudios">
          <ul><h4>Master en Programación y Desarrollo de Aplicaciones JAVA </h4></ul>
          <li>UCAM Universidad Católica San Antonio de Murcia</li>
          <li>Comienzo Enero 2025 - Actual</li>
      </div>
      <div class="estudios">
          <ul><h4> Certificación en Desarrollo de Aplicaciones Web IFCD0210 </h4></ul>
          <li>Academia Postal</li>
          <li>Comienzo Mayo 2024 - Septiembre 2024</li>
          
      </div>
      <div class="estudios">
          <ul><h4> Introducción al lenguaje Java </h4></ul>
          <li>Centro de Novas Tecnoloxías de Galicia</li>
          <li>Tomé varios cursos: Noviembre 2024 - Febrero 2025</li>
          
      </div>
    </div>

    <div class="educacion">
      <h2>Otros Estudios</h2> 
       <div class="estudios">
          <ul><h4> Curso de Ingles Intermedio-Avanzado</h4></ul>
          <li>Escuela Oficial de Idiomas. Certificación nivel C1</li> 
          <li> Julio 2018 - Julio 2023 </li>
        </div>
   
        <div class="estudios">
          <ul><h4> Grado en Administración mención: Comercio Internacional</h4></ul>
          <li> Universidad Marñitima del Caribe </li>
          <li>(Equivalencia en España como Educación Comercial) </li>
          <li> Octubre 2005 - Julio 2010 </li>
      </div>

      <div class="estudios">
          <ul><h4> Especialización en Negocio Marítimo</h4></ul>
          <li> Universidad Marítima del Caribe </li>
          <li> Octubre 2011 - Sept 2013 (Faltó Tesis) </li>
      </div>

      <div class="estudios">
          <ul><h4> Contabilidad Superior</h4></ul>
          <li> Centro Contable Venezolano </li>
          <li> 2005 - 2008 </li>
      </div>
     </div>

  </>

  )
}

export default Education;
