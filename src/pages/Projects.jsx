import projects from '../data/projects';

export const Projects = () => {
  return (
    <div className="container my-5">
      <h1 className="titulos">Proyectos</h1>

      {projects.map((p, i) => (
        <div className="projects" key={i}>
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
          </ul>
        </div>
      ))}
    </div>
  );
};