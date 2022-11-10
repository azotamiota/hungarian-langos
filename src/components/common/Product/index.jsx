import  React from "react"
import AmountButtons from "../AmountButtons"
import { useSelector } from "react-redux"

function Product({isBiggerThanMobile, id, name, price, img}) {
  
  const actualAmount = useSelector(state => state.order.products.filter(prod => prod.name === name))
  // console.log('actualAmount in Products: ', actualAmount)

  return (
    <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
      <img src={img} alt={name} className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></img>
      
      <div className="food-card-description"><span>{id}.</span> {name}</div>
      <div className="price">£{price}</div>
      <AmountButtons name={name} price={price} amount={actualAmount.length > 0 ? actualAmount[0]['amount'] : 0}/>      
    </div>
  )
}

export default Product
