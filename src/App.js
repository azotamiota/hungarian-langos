import './App.css';
import React from "react";
import { Footer, Hero , Location, Navbar, Separator} from './components/common'
import Products from "./components/Products";
// import Testimonials from "./components/Testimonials";
// import FoodGroups from './components/FoodGroups';

export default function App() {
  return (
  <>
    <Navbar />
    <Hero />
    <Separator />
    {/* <FoodGroups /> */}
    {/* <Separator /> */}
    <Products />
    <Location />
    {/* <Testimonials /> */}
    <Footer />
  </>
  )
}
