import  { React, useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";


export default function FoodGroups() {

  const isBiggerThanMobile = useMediaQuery({
  query: '(min-width: 425px)'
  })

  const [position, setPosition] = useState(0)
  const [widthDiff, setWidthDiff] = useState(0)
  
   if (position > 0) {
        setPosition(0)
      }

    // let widthDiffs;
    // if (slidableWidth > 0) {
    //   if (Math.abs(position) > window.innerWidth - slidableWidth) {
    //   setPosition(window.innerWidth - window.innerWidth - slidableWidth)
    //   }
    // }   

  useEffect(() => {
    if (document.querySelector('.cards-class-tablet')) {
      document.querySelector('.cards-class-tablet').style.left = `${position}px`;
    }
    // if (document.querySelector('.food-card-tablet')) {
    //     console.log('if food card tablet class exist: ',Boolean(document.querySelector('.food-card-tablet')));
    //   } else {
    //     console.log(0)
    //   }
  }, [position]) 

  return <>
  <div id='food-groups' className='products'>
      <div className={(isBiggerThanMobile && "nav-arrow") || "hidden"} id="left-arrow-food-group" onClick={() => {
      if (position < 0) {
         setPosition(position + window.innerWidth / 2)
        } else {
          setPosition(0)
        }
    }}>&#10094;</div>
    <div className={(isBiggerThanMobile && "nav-arrow") || "hidden"} id="right-arrow-food-group" onClick={() => {
      setWidthDiff(document.querySelector('.group-card-tablet').offsetWidth * 3 - window.innerWidth) //widthDiff will be  +200
      if (position === 0) {
        if (document.querySelector('.group-card-tablet').offsetWidth * 3 - window.innerWidth < window.innerWidth / 2) {
          setPosition(0 - widthDiff);
          document.querySelector('.card-class-tablet').style.left = `${window.innerWidth - document.querySelector('.group-card-tablet').offsetWidth * 3}px`;
          console.log('position should be negative number here: ', position);
            return     //position will be -400
        } else {
          setPosition(position - window.innerWidth / 2)
        }
      } else
      if (Math.abs(position) + window.innerWidth / 2 > widthDiff) {
        setPosition(0 - widthDiff)     //position will be -400
      } else {
        setPosition(position - window.innerWidth / 2)     //position will be -400
      }
      
      // if (Math.abs(position) > widthDiff)  {
      //   setPosition(0 - widthDiff)
      // }

       
        console.log('position after: ', position, 'barlength - windowlength: ', widthDiff)
      
    }}>&#10095;</div>
      <header className='services-header'><span className='red-letters'>Me</span><span className='green-letters'>nu</span></header>
      <p id='services-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper. </p>
      <div className={(!isBiggerThanMobile && "cards-class") || 'cards-class-tablet'}>
        <div className={(!isBiggerThanMobile && "card") || "group-card-tablet"}>
          <div className="services-logo"><i className="fa-lg fa-solid fa-utensils"></i></div>
          <div className={(!isBiggerThanMobile && "card-description") || "card-description-tablet"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper.</div>
          <div className="button"><a href='#street-food'>Show</a></div>
        </div>
        <div className={(!isBiggerThanMobile && "card") || "group-card-tablet"}>
          <div className="services-logo" style={{color: 'green'}}><i className="fa-lg fa-solid fa-bowl-food"></i></div>
          <div className={(!isBiggerThanMobile && "card-description") || "card-description-tablet"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper.</div>
          <div className="button"><a href='#bowls'>Show</a></div>
        </div>
        <div className={(!isBiggerThanMobile && "card") || "group-card-tablet"}>
          <div className="services-logo"><i className="fa-lg fa-solid fa-champagne-glasses"></i></div>
          <div className={(!isBiggerThanMobile && "card-description") || "card-description-tablet"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ligula odio. Etiam porttitor neque eget maximus blandit. Vestibulum id ante sit amet eros elementum ullamcorper.</div>
          <div className="button"><a href='#drinks'>Show</a></div>
        </div>
      </div>
  </div>
  </>
}
