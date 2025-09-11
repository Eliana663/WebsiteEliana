import projects from '../data/projects';
import './Projects.css'; // Asegúrate de tener un CSS para las clases

export const Projects = () => {
  return (
    <div className="container my-5">
      <h1 className="titulos">Proyectos</h1>

      {projects.map((p, i) => (
        <div className="projects mb-5" key={i}>
          <h2>{p.titulo}</h2>
          <ul>
            <li><strong>Tecnologías utilizadas:</strong> {p.tecnologias.join(', ')}</li>
            <li>
              <strong>Repositorio:</strong>{' '}
              {p.repositorio ? (
                <a href={p.repositorio} target="_blank" rel="noopener noreferrer">GitHub</a>
              ) : (
                'En construcción'
              )}
            </li>
            <li><strong>Descripción:</strong> {p.descripcion}</li>
            {p.imagenes.length > 0 && (
              <li>
                <strong>Imágenes:</strong>
                <div className="imagenes-proyecto">
                  {p.imagenes.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`${p.titulo} ${idx + 1}`} 
                      className="proyecto-img"
                      style={p.titulo === "Página web en React" ? { width: '800px', height: 'auto', objectFit: 'cover' } : {}}
                    />
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};
