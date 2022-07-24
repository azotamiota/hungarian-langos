import React from "react";
import { useMediaQuery } from "react-responsive";


export default function FoodGroups() {

  const isBiggerThanMobile = useMediaQuery({
  query: '(min-width: 425px)'
  })

  return <>
  <div id='food-groups' className='products'>
      <header className='services-header'><span className='red-letters'>Me</span><span className='green-letters'>nu</span></header>
      <p id='services-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper. </p>
      <div className={(!isBiggerThanMobile && "cards-class") || 'cards-class-tablet'}>
        <div className={(!isBiggerThanMobile && "card") || "card-tablet"}>
          <div className="services-logo"><i className="fa-lg fa-solid fa-utensils"></i></div>
          <div className={(!isBiggerThanMobile && "card-description") || "card-description-tablet"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper.</div>
          <div className="button"><a href='#street-food'>Show</a></div>
        </div>
        <div className={(!isBiggerThanMobile && "card") || "card-tablet"}>
          <div className="services-logo" style={{color: 'green'}}><i className="fa-lg fa-solid fa-bowl-food"></i></div>
          <div className={(!isBiggerThanMobile && "card-description") || "card-description-tablet"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper.</div>
          <div className="button"><a href='#bowls'>Show</a></div>
        </div>
        <div className={(!isBiggerThanMobile && "card") || "card-tablet"}>
          <div className="services-logo"><i className="fa-lg fa-solid fa-champagne-glasses"></i></div>
          <div className={(!isBiggerThanMobile && "card-description") || "card-description-tablet"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper.</div>
          <div className="button"><a href='#drinks'>Show</a></div>
        </div>
      </div>
  </div>
  </>
}
