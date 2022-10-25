import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './Basket.module.css'
import { basketVisibility } from '../../../actions'
import { BasketContent, Button } from '..'
import cart from '../../../images/cart.png'

function BasketNavIcon() {

  const dispatch = useDispatch()
  const isBasketVisible = useSelector(state => state.isBasketVisible)
  const amountInBasket = useSelector(state => state.order.products.length)
  const navigateTo = useNavigate()

  const toCheckout = (e) => {
    e.preventDefault()
    navigateTo('/checkout')
    dispatch(basketVisibility(false))
  }
  return (
    <>
      <div className={styles.basketIcon} onClick={() => dispatch(basketVisibility(!isBasketVisible))}>
        <div className={styles.notification}><img src={cart} alt='cart'/>
        {amountInBasket > 0 && <span className={styles.badge}>{amountInBasket}</span>}
        </div>
      </div>
      {isBasketVisible && (
        <div className={styles.basket}>
          <div className={styles.closeBasket} onClick={() => dispatch(basketVisibility(false))}>❌</div>
          <BasketContent />
          <Button handleSubmit={toCheckout}>Checkout</Button> 
        </div>
      )}
    </>
  )
}

export default BasketNavIcon
