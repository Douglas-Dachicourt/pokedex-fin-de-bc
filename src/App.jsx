import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header";
import Home from "./assets/pages/Home";
import Pokemons from "./assets/pages/Pokemons";
import Pokemon from "./assets/pages/Pokemon";
import Type from "./assets/pages/Type";
import SpecificType from "./assets/pages/SpecificType";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/type" element={<Type />} />
          <Route path="/type/:type" element={<SpecificType />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
