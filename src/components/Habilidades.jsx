import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython } from 'react-icons/si';
import "../styles/Habilidades.css"
import MenuHamburgueza from "./MenuHamburgueza"


const Habilidades = () => {
  return (
    <div className="contenedor-habilidades">
      <div className="navBar">
        <MenuHamburgueza />
      </div>
      <h2 className='titulo-habilidades'>Desarrollador web</h2>
      <p className='parrafo-habilidades'>Estas son mis habilidades</p>
      <ul className='contenedor-habilidades-lista'>
        <li className='lista-habilidades html'>
          <i><SiHtml5  size={60} /></i>
          Html
        </li>
        <li className='lista-habilidades javascript'>
          <i><SiJavascript  size={60} /></i>
          Javascript
        </li>
        <li className='lista-habilidades css'>
          <i><SiCss3  size={60} /></i>
          Css
        </li>
        <li className='lista-habilidades react'>
          <i><SiReact  size={60} /></i>
          React
        </li>
        <li className='lista-habilidades python'>
          <i><SiPython  size={60} /></i>
          Python
        </li>
      </ul>
    </div>
  )
}

export default Habilidades