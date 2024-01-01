import React from "react";
import css from "./Elnura.module.css";
import css2 from "./normalize.module.css";
import medicine from "../../Assets/medicine.png";
import { Link } from "react-router-dom";
const Elnura = () => {
  return (
    <div className={css.shops}>
      <div className={css.shopsLeft}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST MEDICINE PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={css.shopsRight}>
        <img src={medicine} alt="" />
      </div>
      <Link to="/">
        <button className={css.back}>Back</button>
      </Link>
    </div>
  );
};

export default Elnura;
