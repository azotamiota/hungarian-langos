import React from "react";
import { useMediaQuery } from "react-responsive";


export default function Hero() {

  const isBiggerThanMobile = useMediaQuery({
  query: '(min-width: 425px)'
  })

  const isBiggerThanTablet = useMediaQuery({
  query: '(min-width: 768px)'
  })

  return <>
    <div id="hero">
        <div id="hero-header">
          <header style={{"textAlign": "end","fontSize": (isBiggerThanTablet && '90px') || "30px"}}><u>Best</u> Streetfood<br/>in <strong>Bristol</strong><hr/></header>
        </div>
        {/* <img id='letter-icon' src={logo} alt=""/> */}
      <div id={(!isBiggerThanMobile && "introduction") || (isBiggerThanTablet && "introduction-laptop") || "introduction-tablet"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper.</div>
    </div>
  </>;
}
