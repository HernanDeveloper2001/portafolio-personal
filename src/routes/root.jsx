import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";


const root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default root
