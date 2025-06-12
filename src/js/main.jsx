import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let contador = 0
setInterval(function(){
contador++
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home contador={contador} />
    </React.StrictMode>,
  )
},1000)