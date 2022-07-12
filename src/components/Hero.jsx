import React from "react";
import cloudImage from '../images/cloud-removebg.png';

export default function Hero() {
  return <>
    <div id="hero">
      <img id='hero-image'src={cloudImage} alt=""/>
      <header><span id='red-letters'>Hun</span><span id='white-letters'>gar</span><span id='green-letters'>ian</span> Langos</header>
      <p id="introduction">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sunt ducimus minus consequuntur quis facere esse dignissimos.</p>
    </div>
  </>;
}
