import React, { useState } from 'react'
import Munara from '../Munara/Munara'
import IMG from "../../Assets/img1.png"
function OpenModal() {
    const [modal, setModal] = useState(false);

    const openModal = () => {
      setModal(true);
    };
  
    const closeModal = () => {
      setModal(false);
    };
  return (
    <div>
     <button className="btn" onClick={openModal}>
        Open Modal
      </button>
      <Munara isOpen={modal} onClose={closeModal}>
        <img className="img" src={IMG} alt="" />
      </Munara> 
    </div>
  )
}

export default OpenModal