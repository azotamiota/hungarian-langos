import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './Basket.module.css'
import { basketVisibility } from '../../../actions'
import { BasketContent } from '..'
function BasketNavIcon() {

  const dispatch = useDispatch()
  const isBasketVisible = useSelector(state => state.isBasketVisible)
  const navigateTo = useNavigate()

  const toCheckout = (e) => {
    e.preventDefault()
    navigateTo('/checkout')
    dispatch(basketVisibility(false))
  }
  return (
    <>
      <div className={styles.basketIcon} onClick={() => dispatch(basketVisibility(!isBasketVisible))}>
      👜</div>
      {isBasketVisible && (
        <div className={styles.basket}>
          <div className={styles.closeBasket} onClick={() => dispatch(basketVisibility(false))}>❌</div>
          <BasketContent />
          <button onClick={toCheckout}>Checkout</button> 
        </div>
      )}
    </>
  )
}

export default BasketNavIcon
