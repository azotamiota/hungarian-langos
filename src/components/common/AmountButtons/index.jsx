import React from 'react'
import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { updateBasket } from "../../../actions"

import plus from '../../../images/plus.png'
import minus from '../../../images/minus.png'
function AmountButtons({price, name, amount}) {

  const dispatch = useDispatch()
 
  const changeAmount = (e) => {
    e.preventDefault()
    if (e.target.name === 'add') {
      dispatch(updateBasket({name: name, price: price, amount: amount === 10 ? 10 : amount + 1}))
    } else if (amount > 0){
      dispatch(updateBasket({name: name, price: price, amount: amount - 1}))
    }
  }

  return (
    <div className={styles.toBasket}>
      <button className={styles.changeAmount}><img name='add' onClick={(e) => changeAmount(e)} src={plus} alt='plus'/></button>
      <div>{amount}</div>
      <button className={styles.changeAmount}><img name='minus' onClick={(e) => changeAmount(e)} src={minus} alt='minus'/></button>
    </div>
  )
}

export default AmountButtons
