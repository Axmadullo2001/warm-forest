import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CardList from './components/CardList';
import Footer from "./components/Footer";
import { SignIn } from "./components/SignIn";

import './App.scss';
import "./assets/var.css";

const App = () => {
  return (
      <Routes>
          <Route path="/" element={ <CardList /> } />
          <Route path="/sign-in" element={ <SignIn /> } />
      </Routes>
  );
}

export default App;
