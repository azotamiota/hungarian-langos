import React , { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Basket.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { basketVisibility } from '../../../actions';
import { BasketCard } from '../'
function Basket() {

  const dispatch = useDispatch()
  const orderTotal = useSelector(state => state.order.total)
  const basketData = useSelector(state => state.order)
  const isBasketVisible = useSelector(state => state.isBasketVisible)
  const navigateTo = useNavigate()
  const toCheckout = (e) => {
    e.preventDefault()
    navigateTo('/checkout')
  }
  return (
    <>
      <div className={styles.basketIcon} onClick={() => dispatch(basketVisibility(!isBasketVisible))}>
      👜</div>
      {isBasketVisible && (
        <div className={styles.basket}>
          <div className={styles.closeBasket} onClick={() => dispatch(basketVisibility(false))}>❌</div>
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
            <button onClick={toCheckout}>Checkout</button> 
          </div>
        </div>
      )}
    </>
  )
}

export default Basket
