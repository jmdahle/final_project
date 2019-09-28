import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
      <p className="heroCopy">keep it together</p>
    </div>
  );
}

export default Hero;
