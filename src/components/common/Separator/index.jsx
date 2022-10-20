import React from "react";
import { useMediaQuery } from "react-responsive";
import logo from '../../../images/H-langos.png'

export default function Separator() {

  const isBiggerThanTablet = useMediaQuery({
  query: '(min-width: 768px)'
  })

  return <>
    <div className={(isBiggerThanTablet && 'separator-laptop') ||"separator"}>
      <div className={(isBiggerThanTablet && 'separator-logo-laptop') ||"separator-logo"}>
        <img className={(isBiggerThanTablet && 'logo-laptop') ||"logo"} src={logo} alt=""/>
      </div>
    </div>
  </>
}
