import React from "react";
import Separator from '../Separator';


export default function Footer() {
  return <>
    <footer>
        <Separator />
        <div id="footer-icons">
            <div className="contact-logo"><i className="c-icon fa-lg fa-solid fa-phone"></i>071234567890</div>
            <div className="contact-logo"><i className="c-icon fa-lg fa-solid fa-envelope"></i>something@something.com</div>
            <div id="brand-logos">
              <div className="brand-logo">
                <i className="fa-lg fa-brands fa-facebook"></i>
              </div>
              <div className="brand-logo">
                <i className="fa-lg fa-brands fa-instagram"></i>
              </div>
              <div className="brand-logo">
                <i className="fa-lg fa-brands fa-twitter"></i>
              </div>
              <div className="brand-logo">
                <i className="fa-lg fa-brands fa-linkedin"></i>
              </div>
            </div>
        </div>
        <div id="copyright">Copyright &copy; <a href="https://azotamiota.github.io"><u>azotamiota</u></a> 2022</div>
    </footer>
  </>
}
