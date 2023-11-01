import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

/* dotevnt.config() */
/* import dotevnt from "dotenv"
dotevnt.config() */

/* import "dotenv/config"
console.log(process.env) */


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
 /*  <React.StrictMode> */
    <App />
  /* </React.StrictMode>, */
)
