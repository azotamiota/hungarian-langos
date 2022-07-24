import React from "react";
import { useMediaQuery } from "react-responsive";
import Separator from './Separator';


export default function Products() {

  const isBiggerThanMobile = useMediaQuery({
  query: '(min-width: 425px)'
  })

  return <>
  <div id={isBiggerThanMobile && "street-food"} className='products'>
    <div className={(isBiggerThanMobile && "nav-arrow") || "hidden"} id="left-arrow">&#10094;</div>
    <div className={(isBiggerThanMobile && "nav-arrow") || "hidden"} id="right-arrow">&#10095;</div>
    <header><span className='red-letters'>Street</span><span className='green-letters'> food</span></header>
    <div className="cards-class">
        <div className="food-card first-group-card">
          <div className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Langos with sour-cream, cheese and vegetables</div>
          <div className="price">£6.45</div>
        </div>
        <div className={(isBiggerThanMobile && "hidden") || "food-card"}>
          <div className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Hot dig</div>
          <div className="price">£6.45</div>
        </div>
        <div className={(isBiggerThanMobile && "hidden") || "food-card last-group-card"}>
          <div className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></div>
          <div className="food-card-description">Hamgurger</div>
          <div className="price">£6.45</div>
        </div>
    </div>
  </div>
  <Separator />
  <div id='bowls' className='products'>
    <header><span className='red-letters'>Egytal</span><span className='green-letters'> etelek</span></header>
    <div className="cards-class">
        <div className="food-card first-group-card">
          <div className="food-photo2"></div>
          <div className="food-card-description">Gulash</div>
          <div className="price">£7.15</div>
        </div>
        <div className="food-card">
          <div className="food-photo2"></div>
          <div className="food-card-description">Noodles</div>
          <div className="price">£7.15</div>
        </div>
        <div className="food-card last-group-card">
          <div className="food-photo2"></div>
          <div className="food-card-description">Rice</div>
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
          <div className="food-card-description">Mulled wine</div>
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
