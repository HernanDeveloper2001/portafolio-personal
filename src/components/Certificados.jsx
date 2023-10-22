import { CERTIFICADOS } from "../data/certificados"

const Certificados = () => {

  const data = CERTIFICADOS;

  return (
    <div>
      {data.map((cursos,index) => (
        <div key={index}>
          <h3>{cursos.titulo}</h3>
          <span>{cursos.name}</span>
          <span>{`Fecha de finalización ${cursos.fecha}`}</span>
        </div>
      ))}
    </div>

  )
}

export default Certificados