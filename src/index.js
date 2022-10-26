import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'

import './scss/main.scss'

import App from './App'

let virtualVar = document.getElementById('root')

if (virtualVar !== null) {
  const root = ReactDOM.createRoot(virtualVar)

  root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
  )
}
