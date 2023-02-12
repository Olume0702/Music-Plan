import React, { useState } from "react";
import icon from "../assets/icon-music.svg";
const Main = () => {

  const [value, setValue] = useState({
    plan: "Annual Plan",
    amount: "$59.99/year",
  });

  // let age = 50
  function getValue() {
    if (value.plan === "Annual Plan") {
      setValue({
        plan: "Monthly Plan",
    amount: "$4.9/month",
        
      });
    } else {
      setValue({
        
        plan: "Annual Plan",
    amount: "$59.99/year",
  });
       
      };
    }
  
  return (
    <div className="main">
      <h3>Order Summary</h3>
      <p>
        You can now listen to millions of songs,
        <br />
        audiobooks,and podcasts on any design,
        <br />
        anywhere you like !
      </p>
      <div className="first">
        <img src={icon} alt="" id="icon"/>
        <div className="second">
          <h4>{value.plan}</h4>
          <p>{value.amount}</p>
        </div>
        <button className="btn1" onClick={getValue}>change</button>
      </div>
      <button className="btn2">Proceed to Payment</button> <br />
      <button className="btn3" onClick={() => setValue([])}>Cancel Order</button>
    </div>
  );
};

export default Main;
