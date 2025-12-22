import correoelectronico from './assets/img/email.png';
import logowhassap from './assets/img/logowhassap.png';
import linkedin from './assets/img/linkedin.png';
import './index.css';

export const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "#252850", 
        color: "white",
        padding: "2rem 1rem",
        textAlign: "center",
        marginTop: "2rem",
        color: 'antiquewhite'
      }}
    >
      <h3 style={{ marginBottom: "1.5rem" }}>
        ¿Alguna pregunta? A continuación te dejo varias formas de contactarme:
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <img
            src={logowhassap}
            alt="Logo de WhatsApp"
            style={{ width: "32px", height: "32px" }}
          />
          <span>España (+36) 689-83-27-39</span>
        </div>

       
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <img
            src={correoelectronico}
            alt="Correo Electrónico"
            style={{ width: "40px", height: "25px" }}
          />
          <span>elianadtorrest@gmail.com</span>
        </div>

        {/* LinkedIn */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <img
            src={linkedin}
            alt="LinkedIn"
            style={{ width: "32px", height: "32px" }}
          />
          <a
            href="https://www.linkedin.com/in/elianatorrestazon/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Mi LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
