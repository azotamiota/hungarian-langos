import React , { useState, useEffect } from 'react'
import styles from './Basket.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { basketVisibility } from '../../../actions';
import { BasketCard } from '../'
function Basket() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.order)
  const orderTotal = useSelector(state => state.order.total)
  const basketData = useSelector(state => state.order)
  console.log('orderTotal: ', orderTotal)
  console.log('orderTotal: ', orderTotal)
  // const data = {products: [{name: 'sample food', price: 4.34, amount: 1}]}
  const isBasketVisible = useSelector(state => state.isBasketVisible)

  return (
    <>
      <div className={styles.basketIcon} onClick={() => dispatch(basketVisibility())}>
      👜</div>
      {isBasketVisible && (
        <div className={styles.basket}>
          <div className={styles.closeBasket} onClick={() => dispatch(basketVisibility())}>❌</div>
          <p>Your basket:</p> 
          <div>{basketData.products.length > 0 ? 
          basketData.products.map((item, index) => (<div key={index}>
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
