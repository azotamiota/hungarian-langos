import React from "react";

export default function Location() {
  return <>
    <div id="location">
        <div id="location-text">
            <header id='location-header'><i className="fa-solid fa-location-dot"></i></header>
            <div>1a Nelson Parade<br /> Bedminster,<br /> Bristol<br /> BS3 4JA</div>
        </div>
        <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7091519030328!2d-2.594712384366621!3d51.44513507962494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718d61e6941c07%3A0xe5b3471693506f82!2sHungarian%20Langos!5e0!3m2!1sen!2suk!4v1657829476599!5m2!1sen!2suk" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </>
}
