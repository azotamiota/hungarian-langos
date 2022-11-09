import  { React, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FoodSection } from "../../common";
import axios from "axios";

export default function Products() {

  const isBiggerThanMobile = useMediaQuery({
  query: '(min-width: 425px)'
  })
  
  const [position, setPosition] = useState(0)
  const [food, setFood] = useState([])
  // const [widthDiff, setWidthDiff] = useState(0)
  
  // const backendServerProducts = 'https://react-restaurant-sample.herokuapp.com/products'
  const backendServerProducts = 'http://localhost:4040/products'

  useEffect(() => {

    const getMenu = async () => {
      try {
        const fetchedData = await axios.get(backendServerProducts)
        setFood(fetchedData.data)
      } catch (error) {
        console.log('Server error: ', error)
      }
    }
    getMenu()

  }, [])

   if (position > 0) {
        setPosition(0)
      }
  useEffect(() => {
    
    if (document.querySelector('.slidable-cards')) {
      document.querySelector('.slidable-cards').style.left = `${position}px`;
    }
  }, [position]) // only re-run the effect if position changes 

  console.log('food in Products: ', food)
  return <>
    {food.map(sec =><FoodSection key={sec.category} name={sec.category} isBiggerThanMobile={isBiggerThanMobile} products={sec.products} />)}
  </>
}
