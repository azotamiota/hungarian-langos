import React from "react";
import cloudImage from '../images/cloud-removebg.png';

export default function Hero() {
  return <>
    <div id="hero">
      <img id='hero-image'src={cloudImage} alt=""/>
      <header><span className='red-letters'>Hun</span><span className='white-letters'>gar</span><span className='green-letters'>ian</span> Langos</header>
      <div id="introduction">Ide johet valami bevezeto szoveg, valami frappans leiras a helyrol, mirol hires, mi a legfinomabb...stb.</div>
    </div>
  </>;
}
