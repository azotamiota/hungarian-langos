import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Separator from './Separator';


export default function Products() {

  const isBiggerThanMobile = useMediaQuery({
  query: '(min-width: 425px)'
  })
  
  const [position, setPosition] = useState(0)

  function myFunc(e) {
    console.log('kurva anyad')
  }

  return <>
  <div id={isBiggerThanMobile && "street-food"} className='products'>
    <div className={(isBiggerThanMobile && "nav-arrow") || "hidden"} id="left-arrow">&#10094;</div>
    <div className={(isBiggerThanMobile && "nav-arrow") || "hidden"} id="right-arrow" onClick={myFunc()}>&#10095;</div>
    <header><span className='red-letters'>Street</span><span className='green-letters'> food</span></header>
    <div className={(isBiggerThanMobile && "slidable-cards cards-class") || "cards-class"} style={{left: position + 'px'}}>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
          <div id='str-food-1' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Sajtos-tejfolos-zoldseges langos</div>
          <div className="price">£6.45</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card"}>
          <div id='str-food-2'className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Hot-Dog</div>
          <div className="price">£6.45</div>
        </div>
        <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card last-group-card"}>
          <div id='str-food-3' className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Hamburger</div>
          <div className="price">£6.45</div>
        </div>
    </div>
  </div>
  <Separator />
  <div id='bowls' className='products'>
    <header><span className='red-letters'>Egytal</span><span className='green-letters'> etelek</span></header>
    <div className="cards-class">
        <div className="food-card first-group-card">
          <div id='str-food-3' className="food-photo"></div>
          <div className="food-card-description">Hagyomanyos magyar gulyas</div>
          <div className="price">£7.15</div>
        </div>
        <div className="food-card">
          <div id='str-food-3' className="food-photo"></div>
          <div className="food-card-description">Hagyomanyos magyar gulyas</div>
          <div className="price">£7.15</div>
        </div>
        <div className="food-card last-group-card">
          <div id='str-food-3' className="food-photo"></div>
          <div className="food-card-description">Hagyomanyos magyar gulyas</div>
          <div className="price">£7.15</div>
        </div>
    </div>
  </div>
  <Separator />
  <div id='drinks' className='products'>
    <header><span className='red-letters'>Ita</span><span className='green-letters'>lok</span></header>
    <div className="cards-class">
        <div className="food-card first-group-card">
          <div className="drink-photo"></div>
          <div className="food-card-description">Coca-cola</div>
          <div className="price">£0.85</div>
        </div>
        <div className="food-card">
          <div className="drink-photo"></div>
          <div className="food-card-description">Forralt bor</div>
          <div className="price">£0.85</div>
        </div>
        <div className="food-card last-group-card">
          <div className="drink-photo"></div>
          <div className="food-card-description">English breakfast tea</div>
          <div className="price">£0.85</div>
        </div>
    </div>
  </div>
  </>
}
