import  { React, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Separator from './Separator';


export default function Products() {

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
    
    if (document.querySelector('.slidable-cards')) {
      document.querySelector('.slidable-cards').style.left = `${position}px`;
    }
  }, [position]) // only re-run the effect if position changes 


  return <>
  <div id={(isBiggerThanMobile && "street-food") || 'false'} className='products'>

    {/* <div className={(isBiggerThanMobile && "nav-arrow") || "hidden"} id="left-arrow" onClick={() => {
      if (position < 0) {
         setPosition(position + window.innerWidth / 2)
        } else {
          setPosition(0)
        }
    }}>&#10094;</div>
    <div className={(isBiggerThanMobile && "nav-arrow") || "hidden"} id="right-arrow" onClick={() => {
      setWidthDiff(900 - window.innerWidth) //widthDiff will be  +200
      if (position === 0) {
        if (900 - window.innerWidth < window.innerWidth / 2) {
          setPosition(0 - widthDiff);
          document.querySelector('.slidable-cards').style.left = `${window.innerWidth - 900}px`;
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
      
    }}>&#10095;</div> */}
    <header><span className='red-letters'>Street</span><span className='green-letters'> food</span></header>
      {/* // style={{"right": `${position}`}} */}
    <div id="moveable-street-food" className={(isBiggerThanMobile && "slidable-cards") ||"cards-class"}> 
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
          <div id='str-food-1' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Langos with sour-cream, cheese and vegetables</div>
          <div className="price">£6.45</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card"}>
          <div id='str-food-2' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Hot dig</div>
          <div className="price">£6.45</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card last-group-card"}>
          <div id='str-food-3' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Hamgurger</div>
          <div className="price">£6.45</div>
        </div>
    </div>
  </div>
  <Separator />
  <div id='bowls' className='products'>
    <header><span className='red-letters'>Bo</span><span className='green-letters'>wls</span></header>
    <div className={(isBiggerThanMobile && "slidable-cards") ||"cards-class"}>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
          <div id='bowl-1' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Gulash</div>
          <div className="price">£7.15</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card"}>
          <div id='bowl-2' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Noodles</div>
          <div className="price">£7.15</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card last-group-card"}>
          <div id='bowl-3' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Rice</div>
          <div className="price">£7.15</div>
        </div>
    </div>
  </div>
  <Separator />
  <div id='drinks' className='products'>
    <header><span className='red-letters'>Dri</span><span className='green-letters'>nks</span></header>
    <div className={(isBiggerThanMobile && "slidable-cards") ||"cards-class"}>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
          <div id='drink-1' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Lemonade</div>
          <div className="price">£0.85</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card"}>
          <div id='drink-2' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Hot tea</div>
          <div className="price">£0.85</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card last-group-card"}>
          <div id='drink-3' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Beer</div>
          <div className="price">£0.85</div>
        </div>
    </div>
  </div>
  </>
}
