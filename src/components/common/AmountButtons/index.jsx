import React from 'react'
import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { updateBasket } from "../../../actions"


function AmountButtons({price, name, amount}) {

  const dispatch = useDispatch()
 
  const changeAmount = (e) => {
    e.preventDefault()
    if (e.target.name === 'add') {
      dispatch(updateBasket({name: name, price: price, amount: amount === 10 ? 10 : amount + 1}))
    } else {
      dispatch(updateBasket({name: name, price: price, amount: amount === 0 ? 0 : amount - 1}))
    }
  }

  return (
    <div className={styles.toBasket}>
      <button className={styles.changeAmount} name='add' onClick={(e) => changeAmount(e)}>➕</button>
      <div>{amount}</div>
      <button className={styles.changeAmount} name='minus' onClick={(e) => changeAmount(e)}>➖</button>
    </div>
  )
}

export default AmountButtons
