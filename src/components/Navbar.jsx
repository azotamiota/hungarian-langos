import React, { useReducer } from "react";
// import logo from '../images/H-langos.png'

const initialState = {
  navbarVisibility: 'hide-section',
  hamburgerMenuState: ''
}

export default function Navbar() {
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
  <div id="navbar">
    <div className="brand">

      <header className='brand-header'><span className='red-letters'>Hungarian</span><span className='green-letters'> Langos</span></header>


        {/* <img id="logo" src={logo} alt=""/>
        <div className="toogle">

        </div> */}
    </div>
       <div id="container" className={state.hamburgerMenuState} onClick={() => dispatch({type: "SET_MULTIPLE"})}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
  </div>
  <ul id="nav-links" className={state.navbarVisibility}>
            <li><a href='#hero' className="active">Home</a></li>
            <li><a href="#food-groups">Finomsagaink</a></li>
            <li><a href="#street-food">Street Food</a></li>
            <li><a href="#bowls">Egytal etelek</a></li>
            <li><a href="#drinks">Italok</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#footer-icons">Contact</a></li>
  </ul>
  </>
}

