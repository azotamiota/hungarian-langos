import React from "react";
// import logo from '../images/H-langos.png'


export default function Hero() {
  return <>
    <div id="hero">
      {/* <img id='hero-image'src={cloudImage} alt=""/> */}
        <div id="hero-header">
          <header style={{"text-align": "end","font-size": "30px"}}><u>Best</u> Streetfood<br/>in <strong>Bristol</strong><hr/></header>
        {/* <img id='hero-logo' className="logo" src={logo} alt=""/> */}

        </div>
      {/* <header><span className='red-letters'>Hun</span><span className='white-letters'>gar</span><span className='green-letters'>ian</span> Langos</header> */}
      <div id="introduction">Ide johet valami bevezeto szoveg, valami frappans leiras a helyrol, mirol hires, mi a legfinomabb...stb.</div>
    </div>
  </>;
}
