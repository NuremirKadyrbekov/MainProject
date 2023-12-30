
import { useState } from "react";
import Munara from "./components/Munara/Munara";
import './components/Munara/Munara.css';
import IMG from './components/Munara/141.jpg'
import { Ayat } from "./components/Ayat/Ayat";
import Elnura from "./components/Elnura/Elnura";
import Baimyrza from "./components/Baimyrza/Baimyrza";
import Anatai from "./components/Anatai/Anatai";

function App() {
  const [Modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };



  return (
    <div>

      <button className="btn" onClick={openModal}>Открыть модальное окно</button>
      <Munara isOpen={Modal} onClose={closeModal}>
        <img className='img' src={IMG} alt="" />
      </Munara>
      <Ayat />
      <Elnura />
      <Baimyrza />
      <Anatai />
    </div>
  );
};



export default App;
