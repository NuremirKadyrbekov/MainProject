
import React from 'react';


function Munara({ isOpen, onClose, children }) {

  return (
     <>
   
    {isOpen && (
      <div className="modalWindow">
        <div className="modal">
         
          <button className="closebtn" onClick={onClose}>
            Закрыть
          </button>
          {children}
        </div>
      </div>
    )}
  </>
  );
    };
   




export default Munara