import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Location() {

  const isBiggerThanMobile = useMediaQuery({
    query: '(min-width: 425px)'
  })

  return <>
    <div id="location">
        <div id="location-text">
            <header id='location-header'><i className="fa-solid fa-location-dot"></i></header>
            <div>23 Sample Street<br /> Sample Disctrict,<br /> London<br /> NW1 1AA</div>
        </div>
        <iframe id={(isBiggerThanMobile && 'google-map-tablet') || 'google-map'} title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340175038!2d-0.24168162129936244!3d51.52855824115511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1659377873317!5m2!1sen!2suk" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </>
}

