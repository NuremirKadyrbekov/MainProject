

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

function App() {
  const [Modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/munara" element={<Munara />}>
            <Route path="/Ayat" element={<Ayat />}>
              <Route path="/Elnura" element={<Elnura />}>
                <Route path="/Baimyrza" element={<Baimyrza />}>
                  <Route path="/Anatai" element={<Anatai />}>
                    <Route path="/Alina" element={<Alina />}>
                      <button className="btn" onClick={openModal}>Открыть модальное окно</button>
                      <Munara isOpen={Modal} onClose={closeModal}>
                        <img className='img' src={IMG} alt="" />
                      </Munara>
                      </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};



export default App;
