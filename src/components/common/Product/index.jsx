import  { React, useState } from "react";
function Product({isBiggerThanMobile, name, price, img}) {
  const [ count, setCount ] = useState(0) 
  const addOne = (e) => {
    e.preventDefault()
    if (count < 10){
      setCount(prev => prev + 1)
    } else {
      alert('sorry, 10 is maximum number for one order')
    }
  }
  const takeOne = (e) => {
    e.preventDefault()
    if (count > 0){
      setCount(prev => prev - 1)
    }
  }
  const addToBasket = (e) => {
    e.preventDefault()

  }
  return (
    <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
      <img src={img} alt={name} className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></img>
      <div className="food-card-description">{name}</div>
      <div className="price">{price}</div>
      <div className='toBasket'>
        <button className='changeAmount' onClick={(e) => addOne(e)}>➕</button>
        <div>{count}</div>
        <button className='changeAmount' onClick={(e) => takeOne(e)}>➖</button>
      </div>
      <button className='addToBasket' onClick={(e) => addToBasket(e)}>Add to basket</button>
    </div>
  )
}

export default Product