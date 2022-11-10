import React, { useReducer } from "react"
import { useMediaQuery } from "react-responsive";
import { Basket } from '../'

const initialStateMedia = {
  navbarVisibility: 'hide-section',
  hamburgerMenuState: '',
  activeColor: 'inherit'
}

export default function Navbar() {
  const isBiggerThanTablet = useMediaQuery({
  query: '(min-width: 768px)'
  })

  const reducerMedia = (state, action) => {
    switch (action.type) {
      case "SET_MULTIPLE":
        return {
          navbarVisibility: state.navbarVisibility === 'hide-section' ? 'show-section' : 'hide-section',
          hamburgerMenuState: state.hamburgerMenuState === 'cross' ? 'false' : 'cross'
        }
        default:
          console.log('Something went wrong');
         break;
    }
  }

  const [state, dispatch] = useReducer(reducerMedia, initialStateMedia)
                
  const handleClick = (e) => {
    !isBiggerThanTablet && dispatch({type: "SET_MULTIPLE"});
  }

  return <>
  <div id="navbar-container">
    <div id={!isBiggerThanTablet ? 'navbar' : 'navbar-tablet' }>
        <header className='brand-header'><span className='red-letters'>Sample</span><span className='green-letters'> Name</span></header>       
    </div>
    {!isBiggerThanTablet && <div id="container" className={state.hamburgerMenuState} onClick={() => dispatch({type: "SET_MULTIPLE"})}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
          </div>}
    <ul id={(!isBiggerThanTablet && "nav-links") || "nav-links-tablet"} className={!isBiggerThanTablet ? state.navbarVisibility : 'false'}>
              <li><a onClick={(e) => handleClick(e)} href='http://localhost:3000/#hero'>Home</a></li>
              {/* <li><a onClick={!isBiggerThanTablet ? () => dispatch({type: "SET_MULTIPLE"}) : null} href="#food-groups">Menu</a></li> */}
              <li><a onClick={(e) => handleClick(e)} href='http://localhost:3000/#starters&appetisers'>Starters</a></li>
              <li><a onClick={(e) => handleClick(e)} href="http://localhost:3000/#mains">Mains</a></li>
              <li><a onClick={(e) => handleClick(e)} href="http://localhost:3000/#drinks">Drinks</a></li>
              <li><a onClick={(e) => handleClick(e)} href="http://localhost:3000/#location">Location</a></li>
              <li><a onClick={(e) => handleClick(e)} href="http://localhost:3000/#footer-icons">Contact</a></li>
              <li><Basket /></li>
    </ul>
  </div>
  </>
}

