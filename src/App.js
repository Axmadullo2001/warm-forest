import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CardList from './components/CardList';
import Footer from "./components/Footer";
import { SignIn } from "./components/SignIn";

import './App.css';
import "./assets/var.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={ <CardList /> } />
          <Route path="/sign-in" element={ <SignIn /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
