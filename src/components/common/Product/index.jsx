import  React, { useState} from "react"
import AmountButtons from "../AmountButtons"

function Product({isBiggerThanMobile, id, name, price, img}) {
  const [amount, setAmount ] = useState(0)

  return (
    <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
      <img src={img} alt={name} className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></img>
      
      <div className="food-card-description"><span>{id}.</span> {name}</div>
      <div className="price">{price}</div>
      <AmountButtons amount={amount} setAmount={setAmount} foodId={id} name={name} price={price}/>      
    </div>
  )
}

export default Product