import  { React, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FoodSection, Product } from "../../common";
import Separator from '../../common/Separator';
import {food} from '../../../db/data'

export default function Products() {

  const isBiggerThanMobile = useMediaQuery({
  query: '(min-width: 425px)'
  })
  
  const [position, setPosition] = useState(0)
  // const [widthDiff, setWidthDiff] = useState(0)
  
   if (position > 0) {
        setPosition(0)
      }
  useEffect(() => {
    
    if (document.querySelector('.slidable-cards')) {
      document.querySelector('.slidable-cards').style.left = `${position}px`;
    }
  }, [position]) // only re-run the effect if position changes 


  return <>
    {food.map(sec =><FoodSection key={sec.category} name={sec.category} isBiggerThanMobile={isBiggerThanMobile} products={sec.products} />)}
  </>
}
