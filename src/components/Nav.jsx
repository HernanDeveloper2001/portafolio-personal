import { Link } from "react-router-dom"
import "../styles/Nav.css"
import { menuDataContext } from "../Context/MenuContext"
import { useContext, useState } from "react"

const Nav = () => {

  const {
    openMenu,
    onCloseMenu,
  } = useContext(menuDataContext)


  return (
      <div 
        className={`
          ${openMenu && window.innerWidth <= 768 
          ? "mostrar" 
          : openMenu && window.innerWidth <= 1024 
          ? "mostrar" 
          : openMenu === false && window.innerWidth >= 1025
          ? "contenedor-nav" 
          : "ocultar"}`}>
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
              onClick={onCloseMenu}
              className="button-nav"
              to="/certificados">Certificados</Link>
          </li>
        </ul>
      </div>
  )
}

export default Nav