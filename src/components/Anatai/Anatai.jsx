import React from "react";
import css from "./Anatai.module.css";
import { WindowsFilled, AndroidFilled, AppleFilled } from "@ant-design/icons";

function Anatai() {
  const data = [
    {
      title: "Window",
      element: <WindowsFilled className={css.icon} />,
    },
    {
      title: "Android",
      element: <AndroidFilled className={css.icon} />,
    },
    {
      title: "Apple",
      element: <AppleFilled className={css.icon} />,
    },
  ];

  return (
    <div className={css.container}>
      {data.map((el, id) => {
        return (
          <div>
            <div className={css.card}>
              {el.element} 
              <br />
              <p className={css.title}>{el.title}</p>
              <br />
              <p className={css.lorem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Anatai;
