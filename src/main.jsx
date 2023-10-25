import React from 'react'
import ReactDOM from 'react-dom/client'
import Portafolio from './Portafolio'
import "./index.css"
import {BrowserRouter as Router} from "react-router-dom"
import MenuContext from './Context/MenuContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuContext >
      <Router>
        <Portafolio />
      </Router>
    </MenuContext>
  </React.StrictMode>
)
