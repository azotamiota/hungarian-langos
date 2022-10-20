import React , { useState } from 'react'
import styles from './Basket.module.css'

import { BasketCard } from '../'
function Basket() {
  const data = [
    {name: 'sample food', amount: 3, price: 3.45},
    {name: 'mini hot-dog', amount: 3, price: 1.45},
    {name: 'noodle soup', amount: 1, price: 6.45}
  ]
  const [isShown, setIsShown] = useState(false);
  const [basketData, setBasketData] = useState(data)
  return (
    <>
      <div className={styles.basketIcon} onClick={() => setIsShown(prev => !prev)}>
      👜</div>
      {isShown && (
        <div className={styles.basket}>
          <div className={styles.closeBasket} onClick={() => setIsShown(false)}>❌</div>
          <p>Your basket:</p> 
          <div>{basketData ? 
          basketData.map((item, index) => (<div>
            <BasketCard item={item} index={index}/>
          </div>))
          : 'Add your order to proceed'}</div>
        </div>
      )}
    </>
  )
}

export default Basket