import React from "react";
import { Ayat } from "../Ayat/Ayat";
import { Link } from "react-router-dom";
import Elnura from "../Elnura/Elnura";
import Baimyrza from "../Baimyrza/Baimyrza";
import Anatai from "../Anatai/Anatai";
import Alina from "../Alina/Alina";
import css from "./Munara.module.css";

function Munara({ isOpen, onClose, children }) {
  const data = [
    {
      title: "Ayat",
      elem: <Ayat />,
    },
    {
      title: "Elnura",
      elem: <Elnura />,
    },
    {
      title: "Baimyrza",
      elem: <Baimyrza />,
    },
    {
      title: "Anatai",
      elem: <Anatai />,
    },
    {
      title: "Alina",
      elem: <Alina />,
    },
  ];
  return (
    <>
      {isOpen && (
        <div className={css.modalWindow}>
          <div className={css.modal}>
            {children}
            {data.map((el, id) => {
              return (
                <Link to={el.title}>
                  <div className={css.buttonBorders}>
                    <button className={css.primaryButton}>{el.title}</button>
                  </div>
                </Link>
              );
            })}
            <div className={css.buttonBorders}>
              <button className={css.primaryButton} onClick={onClose}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Munara;
