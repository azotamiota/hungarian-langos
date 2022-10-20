import  { React, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Separator from '../../common/Separator';


export default function Products() {

  const isBiggerThanMobile = useMediaQuery({
  query: '(min-width: 425px)'
  })
  
  const [position, setPosition] = useState(0)
  // const [widthDiff, setWidthDiff] = useState(0)
  
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
    <header><span className='red-letters'>Starters &</span><span className='green-letters'> Appetisers</span></header>
      {/* // style={{"right": `${position}`}} */}
    <div id="moveable-street-food" className={(isBiggerThanMobile && "slidable-cards") ||"cards-class"}> 
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
          <div id='str-food-1' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Sample food</div>
          <div className="price">£6.45</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card"}>
          <div id='str-food-2' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Mini hot-dog</div>
          <div className="price">£6.45</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card last-group-card"}>
          <div id='str-food-3' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Noodle soup</div>
          <div className="price">£6.45</div>
        </div>
    </div>
  </div>
  <Separator />
  <div id='bowls' className='products'>
    <header><span className='red-letters'>Mai</span><span className='green-letters'>ns</span></header>
    <div className={(isBiggerThanMobile && "slidable-cards") ||"cards-class"}>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
          <div id='bowl-1' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Beef stew</div>
          <div className="price">£7.15</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card"}>
          <div id='bowl-2' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Hamburger</div>
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
