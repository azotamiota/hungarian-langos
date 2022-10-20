import './App.css';
import React from "react";
import { Footer, Navbar} from './components/common'
import { Home } from './components/pages';
// import Testimonials from "./components/Testimonials";
// import FoodGroups from './components/FoodGroups';

export default function App() {
  return (
  <>
    <Navbar />
      <Home />
    <Footer />
  </>
  )
}
