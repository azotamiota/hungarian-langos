import './App.css';
import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
// import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
  <>
  {/* <ScrollToTop /> */}
  <Navbar />
  <Hero />
  <Services />
  <Portfolio />
  <Testimonials />
  <Products />
  <Footer />
  </>
  )
}
