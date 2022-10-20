import React from 'react'
import { Product } from '..'
import { Separator } from '../'
function index({isBiggerThanMobile, products}) {
  return (
    <div id={(isBiggerThanMobile && "street-food") || 'false'} className='products'>
      <header><span className='red-letters'>Starters &</span><span className='green-letters'> Appetisers</span></header>
        {/* // style={{"right": `${position}`}} */}
      <div id="moveable-street-food" className={(isBiggerThanMobile && "slidable-cards") ||"cards-class"}> 
        {products.map((prod, index) => (<Product key={index} isBiggerThanMobile={isBiggerThanMobile} name={prod.name} price={prod.price} img={prod.image}/>))}
          
      </div>
      <Separator />
    </div>
  )
}

export default index