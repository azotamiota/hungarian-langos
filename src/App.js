import React from "react";
import { useDispatch } from "react-redux"

import './App.css';
import { Footer, Navbar} from './components/common'
import { Home } from './components/pages'
import {basketVisibility} from './actions'


export default function App() {
  const dispatch = useDispatch()

  return (
  <>
    <Navbar />
    <div onClick={() => dispatch(basketVisibility(false))}>
      <Home  />
      <Footer />
    </div>
  </>
  )
}
