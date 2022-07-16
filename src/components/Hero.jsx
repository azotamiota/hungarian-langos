import React from "react";
// import logo from '../images/favicon.ico'


export default function Hero() {
  return <>
    <div id="hero">
        <div id="hero-header">
          <header style={{"text-align": "end","font-size": "30px"}}><u>Best</u> Streetfood<br/>in <strong>Bristol</strong><hr/></header>
        </div>
        {/* <img id='letter-icon' src={logo} alt=""/> */}
      <div id="introduction">Ide johet valami bevezeto szoveg, valami frappans leiras a helyrol, mirol hires, mi a legfinomabb...stb.</div>
    </div>
  </>;
}
