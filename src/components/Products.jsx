import React from "react";
import Separator from './Separator';


export default function Products() {
  return <>
  <div id='street-food' className='products'>
    <header><span className='red-letters'>Street</span><span className='green-letters'>food</span></header>
    <div className="cards-class">
        <div className="food-card first-group-card">
          <div className="food-photo"></div>
          <div className="food-card-description">Sajtos-tejfolos-zoldseges langos</div>
          <div className="price">£3.45</div>
        </div>
        <div className="food-card">
          <div className="food-photo"></div>
          <div className="food-card-description">Sajtos-tejfolos-zoldseges langos</div>
          <div className="price">£3.45</div>
        </div>
        <div className="food-card last-group-card">
          <div className="food-photo"></div>
          <div className="food-card-description">Sajtos-tejfolos-zoldseges langos</div>
          <div className="price">£3.45</div>
        </div>
    </div>
  </div>
  <Separator />
  <div id='bowls' className='products'>
    <header><span className='red-letters'>Egytal</span><span className='green-letters'> etelek</span></header>
    <div className="cards-class">
        <div className="food-card first-group-card">
          <div className="food-photo2"></div>
          <div className="food-card-description">Hagyomanyos magyar gulyas</div>
          <div className="price">£4.15</div>
        </div>
        <div className="food-card">
          <div className="food-photo2"></div>
          <div className="food-card-description">Hagyomanyos magyar gulyas</div>
          <div className="price">£4.15</div>
        </div>
        <div className="food-card last-group-card">
          <div className="food-photo2"></div>
          <div className="food-card-description">Hagyomanyos magyar gulyas</div>
          <div className="price">£4.15</div>
        </div>
    </div>
  </div>;
  </>
}
