import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython } from 'react-icons/si';

const Habilidades = () => {
  return (
    <div>
      <h2>Desarrollador web</h2>
      <p>Estas son mis habilidades</p>
      <ul>
        <li>
          <i><SiHtml5 /></i>
          Html
        </li>
        <li>
          <i><SiJavascript /></i>
          Javascript
        </li>
        <li>
          <i><SiCss3 /></i>
          Css
        </li>
        <li>
          <i><SiReact /></i>
          React
        </li>
        <li>
          <i><SiPython /></i>
          Python
        </li>
      </ul>
    </div>
  )
}

export default Habilidades