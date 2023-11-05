import "../styles/Cv.css";
import curriculum from "../assets/imgs/curriculum.png";
import MenuHamburgueza from "./MenuHamburgueza";
const Cv = () => {
  return (
    <div className="contenedor-cv">
      <div className="navBar">
        <MenuHamburgueza />
      </div>
      <embed src={curriculum} className="cv-imagen"></embed>
    </div>
  )
}

export default Cv