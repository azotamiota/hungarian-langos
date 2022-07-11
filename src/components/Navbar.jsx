import React from "react";

export default function Navbar() {
  return <div id="navbar">
    <div className="brand">
        <img src="#" alt="Navbar image" />
        <div className="toogle">

        </div>
    </div>
    <ul id="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#products">Products</a></li>
    </ul>
  </div>;
}

