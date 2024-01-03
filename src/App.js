import { useState } from "react";
import Munara from "./components/Munara/Munara";
import './components/Munara/Munara.css';
import IMG from './components/Munara/141.jpg'


import { Ayat } from "./components/Ayat/Ayat";
import Elnura from "./components/Elnura/Elnura";
import Baimyrza from "./components/Baimyrza/Baimyrza";
import Anatai from "./components/Anatai/Anatai";
import Alina from "./components/Alina/Alina";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (   
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/munara" element={<Project category="munara" />} />
          <Route path="/ayat" element={<Project category="ayat" />} />
          <Route path="/elnura" element={<Project category="elnura" />} />
          <Route path="/baimyrza" element={<Project category="baimyrza" />} />
          <Route path="/anatai" element={<Project category="anatai" />} />
          <Route path="/alina" element={<Project category="alina" />} />
        </Routes>
      </BrowserRouter>
      <button className="btn" onClick={openModal}>
        Open Modal
      </button>
      <Munara isOpen={modal} onClose={closeModal}>
        <img className="img" src={IMG} alt="" />
      </Munara>
      <Ayat/>
    </div>
  );
};

export default App;