import React, { useReducer } from "react";
import { useMediaQuery } from "react-responsive";
// import logo from '../images/H-langos.png'


const initialState = {
  navbarVisibility: 'hide-section',
  hamburgerMenuState: '',
  activeColor: 'inherit'
}

export default function Navbar() {

  // const isBiggerThanMobile = useMediaQuery({
  // query: '(min-width: 425px)'
  // })

  const isBiggerThanTablet = useMediaQuery({
  query: '(min-width: 768px)'
  })

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_MULTIPLE":
        return {
          navbarVisibility: state.navbarVisibility === 'hide-section' ? 'show-section' : 'hide-section',
          hamburgerMenuState: state.hamburgerMenuState === 'cross' ? '' : 'cross'
        }
        default:
          console.log('Something went wrong');
         break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
                
  return <>
  <div id={(!isBiggerThanTablet && "navbar") || 'navbar-tablet' }>
    <div className="brand">

      <header className='brand-header'><span className='red-letters'>Hungarian</span><span className='green-letters'> Langos</span></header>


        {/* <img id="logo" src={logo} alt=""/>
        <div className="toogle">

        </div> */}
    </div>
       {!isBiggerThanTablet && <div id="container" className={state.hamburgerMenuState} onClick={() => dispatch({type: "SET_MULTIPLE"})}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>}
  </div>
  <ul id={(!isBiggerThanTablet && "nav-links") || "nav-links-tablet"} className={!isBiggerThanTablet && state.navbarVisibility}>
            <li><a onClick={!isBiggerThanTablet && (() => dispatch({type: "SET_MULTIPLE"}))} href='#hero'>Home</a></li>
            <li><a onClick={!isBiggerThanTablet && (() => dispatch({type: "SET_MULTIPLE"}))} href="#food-groups">Finomsagaink</a></li>
            <li><a onClick={!isBiggerThanTablet && (() => dispatch({type: "SET_MULTIPLE"}))} href="#street-food">Street Food</a></li>
            <li><a onClick={!isBiggerThanTablet && (() => dispatch({type: "SET_MULTIPLE"}))} href="#bowls">Egytal etelek</a></li>
            <li><a onClick={!isBiggerThanTablet && (() => dispatch({type: "SET_MULTIPLE"}))} href="#drinks">Italok</a></li>
            <li><a onClick={!isBiggerThanTablet && (() => dispatch({type: "SET_MULTIPLE"}))} href="#location">Location</a></li>
            <li><a onClick={!isBiggerThanTablet && (() => dispatch({type: "SET_MULTIPLE"}))} href="#footer-icons">Contact</a></li>
  </ul>
  </>
}

