import React from 'react'
import { Product } from '..'
import { Separator } from '../'
function index({isBiggerThanMobile, products, name}) {
  const splitInHalf = (text) => {
    const twoHalves = []
    const total = text.length
    twoHalves.push(text.substring(0, Math.round(total/2)))
    twoHalves.push(text.substring(Math.round(total/2), total))
    return twoHalves
  }

  return (
    <div id={(isBiggerThanMobile && "street-food") || 'false'} className='products'>
      <header><span className='red-letters'>{splitInHalf(name)[0]}</span><span className='green-letters'>{splitInHalf(name)[1]}</span></header>
      <div id="moveable-street-food" className={(isBiggerThanMobile && "slidable-cards") ||"cards-class"}> 
        {products.map((prod, index) => (<Product key={index} isBiggerThanMobile={isBiggerThanMobile} id={ prod.id} name={prod.name} price={prod.price} img={prod.image}/>))}
          
      </div>
      <Separator />
    </div>
  )
}

export default index