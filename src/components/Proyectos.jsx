import { PROYECTOSFREECODECAMP, PROYECTOSALURA } from "../data/proyectos"
import "../styles/Proyectos.css"
import MenuHamburgueza from "./MenuHamburgueza";

const Proyectos = () => {
  const proyectosFree = PROYECTOSFREECODECAMP;
  const proyectosAlura = PROYECTOSALURA;

  return (
    <div className="contenedor-proyectos">
      <div 
      className="navBar">
        <MenuHamburgueza />
      </div>
      <h2 className="titulo-proyectos">Proyectos</h2>
      <div className="contenedor-proyectos-lista">
        {
          proyectosFree.map((proyecto,i) => (
            <div key={i} className="lista-proyectos">
              <h3 className="lista-proyectos_subtitulo">{proyecto.name}</h3>
              <p className="lista-proyectos_subparrafo">{proyecto.titulo}</p>
              <span className="lista-proyectos_fecha">{`Fecha de finalización ${proyecto.fecha}`}</span>
              <div className="lista-proyectos_contenedor__links">
                <a 
                  className="lista-proyectos_link"
                  href={proyecto.gitProyecto} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    Ver repositorio
                </a>
                <a 
                  className="lista-proyectos_link"
                  href={proyecto.proyecto} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    Ver proyecto
                </a>
              </div>
            </div>
          ))
        }
      </div>
      <div className="contenedor-proyectos-lista">
        {
          proyectosAlura.map((proyecto,i) => (
            <div key={i} className="lista-proyectos">
              <h3 className="lista-proyectos_subtitulo">{proyecto.name}</h3>
              <p className="lista-proyectos_subparrafo">{proyecto.titulo}</p>
              <span className="lista-proyectos_fecha">{`Fecha de finalización ${proyecto.fecha}`}</span>
              <div className="lista-proyectos_contenedor__links">
                <a 
                  className="lista-proyectos_link"
                  href={proyecto.gitProyecto} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    Ver repositorio
                </a>
                <a 
                  className="lista-proyectos_link"
                  href={proyecto.proyecto} 
                  target="_blank" 
                  rel="noopener noreferrer">
                    Ver proyecto
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Proyectos
