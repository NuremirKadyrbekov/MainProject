import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Ayat } from "./components/Ayat/Ayat";
import Elnura from "./components/Elnura/Elnura";
import Baimyrza from "./components/Baimyrza/Baimyrza";
import Anatai from "./components/Anatai/Anatai";
import Alina from "./components/Alina/Alina";
import Home from "./Page/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ayat" element={<Ayat />} />
        <Route path="/Elnura" element={<Elnura />} />
        <Route path="/Baimyrza" element={<Baimyrza />} />
        <Route path="/Anatai" element={<Anatai />} />
        <Route path="/Alina" element={<Alina />} />
      </Routes>
    </Router>
  );
}

export default App;
