import { CERTIFICADOSALURA,CERTIFICADOSFREECODECAMP } from "../data/certificados"
import "../styles/Certificados.css"
import MenuHamburgueza from "./MenuHamburgueza"

const Certificados = () => {

  const dataAlura = CERTIFICADOSALURA;
  const dataFreeCodeCamp = CERTIFICADOSFREECODECAMP;

  return (
    <div className="contenedor-certificados">
      <div className="navBar">
        <MenuHamburgueza />
      </div>
      <h2 className="titulo-certificados">Certificados</h2>
      <div className="contenedor-certificados-lista">
        {dataAlura.map((cursos,index) => (
          <div key={index} className="lista-certificados">
            <h3 className="lista-certificados_subtitulo">{cursos.name}</h3>
            <p className="lista-certificados_subparrafo">{cursos.titulo}</p>
            <span className="lista-certificados_fecha">{`Fecha de finalización ${cursos.fecha}`}</span>
            <br />
            <a 
              className="lista-certificados_link"
              href={cursos.certificado} 
              target="_blank" 
              rel="noopener noreferrer">
                Ver certificado
            </a>
          </div>
        ))}
      </div>
      <div className="contenedor-certificados-lista">
        {dataFreeCodeCamp.map((cursos,index) => (
          <div key={index} className="lista-certificados">
            <h3 className="lista-certificados_subtitulo">{cursos.name}</h3>
            <p className="lista-certificados_subparrafo">{cursos.titulo}</p>
            <span className="lista-certificados_fecha">{`Fecha de finalización ${cursos.fecha}`}</span>
            <br />
            <a 
              className="lista-certificados_link"
              href={cursos.certificado} 
              target="_blank" 
              rel="noopener noreferrer">
                Ver certificado
            </a>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Certificados