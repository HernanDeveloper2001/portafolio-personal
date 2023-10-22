import React from 'react'
import ReactDOM from 'react-dom/client'
import Portafolio from './Portafolio'
import "./index.css"
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Portafolio />
    </React.StrictMode>
  </Router>
)
