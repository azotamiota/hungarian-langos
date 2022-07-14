import React from "react";
import logo from '../images/H-langos.png'

export default function Separator() {
  return <>
    <div className="separator">
      <div className="separator-logo">
        <img id="logo" src={logo} alt=""/>
      </div>
    </div>
  </>
}
