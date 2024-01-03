import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Project from "./Pages/Project";
import Alina from './components/Alina/Alina'
import Anatai from "./components/Anatai/Anatai";
import Baimyrza from './components/Baimyrza/Baimyrza'
import Ayat from './components/Ayat/Ayat'
import Elnura from './components/Elnura/Elnura'
import OpenModal from "./components/OpenModal/OpenModal";

const App = () => {
 

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/munara" element={<OpenModal/>} />
          <Route path="/ayat" element={<Ayat/>}  />
          <Route path="/elnura" element={<Elnura/>} />
          <Route path="/baimyrza" element={<Baimyrza/>} />
          <Route path="/anatai" element={<Anatai/>} />
          <Route path="/alina" element={<Alina />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;