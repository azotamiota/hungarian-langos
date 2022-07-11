import React, { useReducer } from "react";

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
                
  return <div id="navbar">
    <div className="brand">
        <img src="#" alt="Navbar image" />
        <div className="toogle">

        </div>
    </div>
    <div id="hamburger-menu" onClick={() => dispatch({type: "SET_MULTIPLE"})}>
       <div id="container" className={state.hamburgerMenuState}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        <ul id="nav-links" className={state.navbarVisibility}>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#products">Products</a></li>
        </ul>
        {/* <div className='hide-section'>
            <a class="nav-items" onclick="showWelcome()">Home</a>
            <a class="nav-items" onclick="showAbout()">About</a>
            <a class="nav-items" onclick="showProjectsArticle()">Projects</a>
            <a class="nav-items" onclick="showContact()">Contact</a>
        </div> */}
    </div>
  </div>;
}

