import React , { useState } from 'react'
import styles from './Basket.module.css'
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
      <div
      onMouseEnter={() => setIsShown(true)}
      
      >
      👜</div>
      {isShown && (
        <div className={styles.basket}>
          <div className={styles.closeBasket} onClick={() => setIsShown(false)}>❌</div>
          Your basket: 
          <div>{basketData ? 
          basketData.map((item, index) => (<div>
            <span>{index + 1} </span>
            <span>{item.name} </span>
            <span>{item.price} </span>
            <span>x</span>
            <span>{item.amount} </span>
            <span>=</span>
            <span>{item.amount*item.price}</span>
          </div>))
          : 'Add your order to proceed'}</div>
        </div>
      )}
    </>
  )
}

export default Basket