import React , { useState, useEffect } from 'react'
import styles from './Basket.module.css'
import { useSelector } from 'react-redux';
import { BasketCard } from '../'
function Basket() {
  const data = useSelector(state => state.order)
  const [isShown, setIsShown] = useState(false)
  const [ orderTotal, setOrderTotal] = useState(0)
  const [basketData, setBasketData] = useState(data) //TODO has to be updated from redux

  return (
    <>
      <div className={styles.basketIcon} onClick={() => setIsShown(prev => !prev)}>
      👜</div>
      {isShown && (
        <div className={styles.basket}>
          <div className={styles.closeBasket} onClick={() => setIsShown(false)}>❌</div>
          <p>Your basket:</p> 
          <div>{basketData.products.length > 0 ? 
          basketData.products.map((item, index) => (<div>
            <BasketCard item={item} index={index}/>
          </div>))
          : 'Add your order to proceed'}</div>
          <hr
            style={{
              background: 'lime',
              color: 'lime',
              borderColor: 'lime',
              height: '3px',
              width: '90%',
            }}
          />
          <div className={styles.summary}>
            <div>total: <span>{orderTotal}</span></div>
            <button>Checkout</button> 
          </div>
        </div>
      )}
    </>
  )
}

export default Basket