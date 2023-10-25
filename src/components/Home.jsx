import imagen from "../assets/imgs/hernan.jpg"
import "../styles/Home.css"
import { AiFillGithub, AiFillLinkedin,AiOutlineFileText,AiOutlineMail } from 'react-icons/ai';
import MenuHamburgueza from "./MenuHamburgueza";

const Home = () => {

  return (
    <div className="contenedor-home">
      <div className="navBar">
        <MenuHamburgueza />
      </div>
      <h1 className="titulo-home">Bienvenido a mi portafolio</h1>
      <div className="contenedor-home_imagen">
        <img 
          className="imagen"
          src={imagen} 
          alt="imagen de hernan" />
      </div>
      <p className="parrafo-home">Te invito a explorar mi portafolio y descubrir todas las habilidades que he ido fortaleciendo a lo largo del tiempo. <br/>
       Mi dedicación y esfuerzo se reflejan en el contenido que he creado, con el objetivo de brindarte la mejor experiencia y ser de gran ayuda en lo que estás buscando. <br/>
        Espero que disfrutes de mi trabajo y encuentres lo que necesitas. 😉😉</p>
      <ul className="contenedor-home_lista">
        <li className="lista-home">
          <a 
            href="https://github.com/HernanDeveloper2001"
            target="_blank" 
            rel="noopener noreferrer"
            className="button-home">
            <i>
              <AiFillGithub size={40}/>
            </i>
            Github
          </a>
        </li>
        <li className="lista-home">
          <a 
            href="https://www.linkedin.com/in/hernandariocalvo/"
            target="_blank" 
            rel="noopener noreferrer"
            className="button-home">
            <i>
              <AiFillLinkedin size={40}/>
            </i>
            Linkedin
          </a>
        </li>
        <li className="lista-home">
          <a 
            href=""
            target="_blank" 
            rel="noopener noreferrer"
            className="button-home">
            <i>
              <AiOutlineFileText size={40}/>
            </i>
            Currículum
          </a>
        </li>
        <li className="lista-home">
          <a 
            href="https://mail.google.com/mail/u/0/#inbox?compose=new" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-home">
            <i>
              <AiOutlineMail size={40}/>
            </i>
            hernandariocalvo@gmail.com
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Home