import './App.css';
import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
// import Testimonials from "./components/Testimonials";
import FoodGroups from './components/FoodGroups';
import Separator from './components/Separator';
import Location from './components/Location';

export default function App() {
  return (
  <>
    <Navbar />
    <Hero />
    <Separator />
    <FoodGroups />
    <Separator />
    <Products />
    <Location />
    {/* <Testimonials /> */}
    <Footer />
  </>
  )
}
