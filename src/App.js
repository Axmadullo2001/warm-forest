import { Routes, Route } from "react-router-dom";

import CardList from './components/CardList';
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
