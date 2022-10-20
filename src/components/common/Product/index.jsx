import  { React } from "react";
import AmountButtons from "../AmountButtons";
function Product({isBiggerThanMobile, name, price, img}) {
  return (
    <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
      <img src={img} alt={name} className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></img>
      <div className="food-card-description">{name}</div>
      <div className="price">{price}</div>
      <AmountButtons amount={0}/>      
    </div>
  )
}

export default Product