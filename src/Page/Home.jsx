import React from "react";
import { useState } from "react";
import Munara from "../components/Munara/Munara";
import css from "./Home.module.css";

export default function Home() {
  const [Modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
    document.getElementById("btn").style.display = "none";
  };
  const closeModal = () => {
    setModal(false);
    document.getElementById("btn").style.display = "block";
  };

  return (
    <div className={css.container}>
      <div className={css.buttonBorders}>
        <button id="btn" className={css.primaryButton} onClick={openModal}>
          Открыть модальное окно
        </button>
        <Munara isOpen={Modal} onClose={closeModal}></Munara>
      </div>
    </div>
  );
}
