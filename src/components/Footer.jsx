import React from "react";

export default function Footer() {
  return <>
    <footer>
      {/* <header id='footer-header'>Contact</header> */}
        <div id="footer-icons">
            <div className="contact-logo"><i className="c-icon fa-lg fa-solid fa-phone"></i>07234023402</div>
            <div className="contact-logo"><i className="c-icon fa-lg fa-solid fa-envelope"></i>valami@valami.com</div>
            <div id="brand-logos">
              <div className="brand-logo">
                <a href='https://www.facebook.com/paradeburger' target='blank'><i className="fa-lg fa-brands fa-facebook"></i></a>
              </div>
              <div className="brand-logo">
                <i className="fa-lg fa-brands fa-instagram"></i>
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
