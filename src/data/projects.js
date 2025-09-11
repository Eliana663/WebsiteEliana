import calcImg from '../assets/img/ImagenCalculadoraAvanzada.png';
import inicioImg from '../assets/img/IniciarSesion.png';
import macrosImg from '../assets/img/Macros.png';
import registroImg from '../assets/img/RegistrodeHabitos.png';
import paginaWebImg from '../assets/img/ProyectoPaginaWeb.png';

const projects = [
  {
    titulo: 'Calculadora en Kotlin',
    tecnologias: ['Kotlin', 'Android Studio'],
    repositorio: 'https://github.com/Eliana663/Calculadora-Avanzada',
    descripcion:
      'Esta es una calculadora básica desarrollada desde cero con Kotlin, diseñada como parte de mi proceso de aprendizaje. Permite realizar operaciones aritméticas simples y complejas con una interfaz limpia y responsiva.',
    imagenes: [calcImg]
  },
  {
    titulo: 'Página web en React',
    tecnologias: ['React', 'HTML', 'CSS'],
    repositorio: 'https://github.com/Eliana663/WebsiteEliana/tree/master',
    descripcion:
      'Este es el código de la página web que estás viendo ahora sobre mi perfil.',
    imagenes: [paginaWebImg] 
  },
  {
    titulo: 'StayKeto - Proyecto fin de Máster (En desarrollo)',
    tecnologias: [
      'React',
      'HTML',
      'CSS',
      'Spring Boot',
      'Java',
      'JPA',
      'Spring Security',
      'MySQL'
    ],
    repositorio: null, // En construcción
    descripcion:
      'StayKeto es una aplicación web que estoy diseñando para ayudar a los usuarios a saber si están en cetosis y llevar un control visual de su progreso. Está enfocada en personas que siguen la dieta cetogénica y desean monitorear su estado metabólico, alimentación y métricas personales (peso, medidas, etc.).',
    imagenes: [inicioImg, macrosImg, registroImg]
  }
];

export default projects;
