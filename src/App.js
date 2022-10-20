import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import { SignIn } from "./pages/SignIn";

import './App.scss';
import "./assets/var.css";

const App = () => {
  return (
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/sign-in" element={ <SignIn /> } />
      </Routes>
  );
}

export default App;
