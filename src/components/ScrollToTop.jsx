import React from "react";

export default function ScrollToTop() {

  const toTopButton = document.getElementById('to-top')

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopButton.style.display = "flex";
    } else {
      toTopButton.style.display = "none";
    }
  }

  window.onscroll = () => scrollFunction();
  toTopButton.addEventListener('click', () => {
    console.log('scroll up button clicked')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
  
  return <>
  <div id='to-top'><i class="fa-solid fa-arrow-up fa-lg"></i></div>
  </>
}
