import correoelectronico from './assets/img/email.png'
import logowhassap from './assets/img/logowhassap.png'
import linkedin from './assets/img/linkedin.png'
import './index.css';



export const Footer = () => {
  return (
    
    <footer id="footer">
    
      <h3 id="parrafoFooter">¿Alguna pregunta? A continuación te dejo varias formas de contactarme:   </h3>
      <p> <img 
                src={logowhassap}
                alt="Logo de Whassap"
                height="100px"
                width="100  px" /> 
          &nbsp; España (+ 36) 689-83-27-39</p>
      <p> <img 
              src={correoelectronico}
              alt="Correo Electrónico"
              height="80px"
              width="110px" /> &nbsp;        
          elianadtorrest@gmail.com</p>
      <p> <img 
            src={linkedin}
            alt="Linked in"
            height="100px"
            width="100px" />        
            <a  href="https://www.linkedin.com/in/elianatorrestazon/">https://www.linkedin.com/in/elianatorrestazon/ </a></p>
    </footer>
  )
}
