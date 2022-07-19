import React from "react";
import Separator from './Separator';


export default function Footer() {
  return <>
    <footer>
      <header>Opening hours</header>
        <div id="opening-hours">
          <div>Monday</div>
          <div>Closed</div>
          <div>Tuesday</div>
          <div>9:00 - 13:00</div>
          <div>Wednesday</div>
          <div>9:00 - 13:00</div>
          <div>Thursday</div>
          <div>9:00 - 13:00</div>
          <div>Friday</div>
          <div>9:00 - 14:00</div>
          <div>Saturday</div>
          <div>9:00 - 15:00</div>
          <div>Sunday</div>
          <div>Closed</div>
        </div>
        <Separator />
        <div id="footer-icons">
            <div className="contact-logo"><i className="c-icon fa-lg fa-solid fa-phone"></i>07234023402</div>
            <div className="contact-logo"><i className="c-icon fa-lg fa-solid fa-envelope"></i>valami@valami.com</div>
            <div id="brand-logos">
              <div className="brand-logo">
                <a href='https://www.facebook.com/paradeburger' target='blank'><i className="fa-lg fa-brands fa-facebook"></i></a>
              </div>
              <div className="brand-logo">
                <a href='https://www.instagram.com/hungarian_langos_bs3/' target='blank'><i className="fa-lg fa-brands fa-instagram"></i></a>
              </div>
              <div className="brand-logo">
                <i className="fa-lg fa-brands fa-twitter"></i>
              </div>
            </div>
        </div>
        <div id="copyright">Copyright &copy; <a href="https://azotamiota.github.io"><u>azotamiota</u></a> 2022</div>
    </footer>
  </>
}
