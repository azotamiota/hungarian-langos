import React from 'react'
function index({isBiggerThanMobile, name, price, img}) {
  return (
    <div className={(isBiggerThanMobile && "food-card-tablet") || "food-card first-group-card"}>
      <img src={img} className={(isBiggerThanMobile && "food-photo-tablet") ||"food-photo"}></img>
      <div className="food-card-description">{name}</div>
      <div className="price">{price}</div>
    </div>
  )
}

export default index