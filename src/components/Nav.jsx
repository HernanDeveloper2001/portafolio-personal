import { Link } from "react-router-dom"
import "../styles/Nav.css"


const Nav = () => {
  return (
    <div className="contenedor-nav">
      <ul className="contenedor-nav-lista">
        <li className="lista-nav">
          <Link 
            className="button-nav"
            to="/">Home</Link>
        </li>
        <li className="lista-nav">
          <Link 
            className="button-nav"
            to="/habilidades">Habilidades</Link>
        </li>
        <li className="lista-nav">
          <Link 
            className="button-nav"
            to="/proyectos">Proyectos</Link>
        </li>
        <li className="lista-nav">
          <Link 
            className="button-nav"
            to="/certificados">Certificados</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav