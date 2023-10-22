import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Certificados from "../components/Certificados";
import Habilidades from "../components/Habilidades";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/habilidades" element={<Habilidades />}/>
        <Route path="/certificados" element={<Certificados />}/>
      </Routes>
    </div>
  )
}

export default Root