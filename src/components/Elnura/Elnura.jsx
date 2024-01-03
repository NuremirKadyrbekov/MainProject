import React from "react";
import './Elnura.css'
import medicine from '../../Assets/medicine.png'
const Elnura = () => {
    return (
        <div className="shops">
            <div className="shops-left">
                <h1></h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST MEDICINE PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="shops-right">
                <img src={medicine} alt=""/>
            </div>
        </div>
    )
}

export default Elnura