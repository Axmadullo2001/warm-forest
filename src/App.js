import Header from "./components/Header";
import CardList from './components/CardList';
import Footer from "./components/Footer";

import "./assets/var.css";
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
