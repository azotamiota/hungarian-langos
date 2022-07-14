import './App.css';
import logo from '../images/H-langos.png'
import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
// import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import FoodGroups from './components/Services';

export default function App() {
  return (
  <>
  {/* <ScrollToTop /> */}
  <Navbar />
  <Hero />
  <FoodGroups />
  <Products />
  <Portfolio />
  <Testimonials />
  <Footer />
  </>
  )
}
