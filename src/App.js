import React from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import { SignIn } from "./pages/SignIn"

const App = () => {
  return (
    <React.StrictMode>
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/sign-in" element={ <SignIn /> } />
      </Routes>
    </React.StrictMode>
  );
}

export default App;
