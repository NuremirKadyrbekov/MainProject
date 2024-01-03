import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="nav">
        <img src="" alt="" />
        <p>PROJECTS</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("munara");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/munara">
            Munara
          </Link>
          {menu === "munara" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ayat");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/ayat">
            Ayat
          </Link>
          {menu === "ayat" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("elnura");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/elnura">
            Elnura
          </Link>
          {menu === "elnura" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("baimyrza");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/baimyrza">
            Baimyrza
          </Link>
          {menu === "baimyrza" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("anatai");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/anatai">
            Anatai
          </Link>
          {menu === "anatai" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("alina");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/alina">
            Alina
          </Link>
          {menu === "alina" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;