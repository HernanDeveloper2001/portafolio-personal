import { Link } from "react-router-dom"
import "../styles/Nav.css"
import { menuDataContext } from "../Context/MenuContext"
import { useContext } from "react"

const Nav = () => {

  const {
    openMenu,
    menu,
    onCloseMenu,
  } = useContext(menuDataContext)


  return (
      <div 
        className={`openMenu ${openMenu && window.innerWidth <= 1025 ? "mostrar" : "contenedor-nav"}`}>
        <ul className="contenedor-nav-lista">
          <li className="lista-nav">
            <Link 
              onClick={onCloseMenu}
              className="button-nav"
              to="/">Home</Link>
          </li>
          <li className="lista-nav">
            <Link 
              onClick={onCloseMenu}
              className="button-nav"
              to="/habilidades">Habilidades</Link>
          </li>
          <li className="lista-nav">
            <Link 
              onClick={onCloseMenu}
              className="button-nav"
              to="/proyectos">Proyectos</Link>
          </li>
          <li className="lista-nav">
            <Link 
              onClick={menu}
              className="button-nav"
              to="/certificados">Certificados</Link>
          </li>
        </ul>
      </div>
  )
}

export default Nav