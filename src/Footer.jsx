import correoelectronico from './assets/img/correoelectronico.jpg'
import logowhassap from './assets/img/logowhassap.jpg'
import linkedin from './assets/img/linkedin.png'



export const Footer = () => {
  return (
    
    <footer id="footer">
    
      <h3>¿Alguna pregunta? A continuación te dejo varias formas de contactarme:   </h3>
      <p> <img 
                src={logowhassap}
                alt="Logo de Whassap"
                height="30px"
                width="30px" /> 
          España (+ 36) 689-83-27-39</p>
      <p> <img
              src={correoelectronico}
              alt="Correo Electrónico"
              height="30px"
              width="30px" />        
          elianadtorrest@gmail.com</p>
      <p> <img
            src={linkedin}
            alt="Linked in"
            height="30px"
            width="30px" />        
            <a href="https://www.linkedin.com/in/elianatorrestazon/"> https://www.linkedin.com/in/elianatorrestazon/ </a>
            </p>
      
    
  </footer>
  )
}
