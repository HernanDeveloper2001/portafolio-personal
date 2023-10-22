import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython } from 'react-icons/si';
import "../styles/Habilidades.css"


const Habilidades = () => {
  return (
    <div className="contenedor-habilidades">
      <h2 className='titulo-habilidades'>Desarrollador web</h2>
      <p className='parrafo-habilidades'>Estas son mis habilidades</p>
      <ul className='contenedor-habilidades-lista'>
        <li className='lista-habilidades'>
          <i><SiHtml5 /></i>
          Html
        </li>
        <li className='lista-habilidades'>
          <i><SiJavascript /></i>
          Javascript
        </li>
        <li className='lista-habilidades'>
          <i><SiCss3 /></i>
          Css
        </li>
        <li className='lista-habilidades'>
          <i><SiReact /></i>
          React
        </li>
        <li className='lista-habilidades'>
          <i><SiPython /></i>
          Python
        </li>
      </ul>
    </div>
  )
}

export default Habilidades