import React, {useState, useEffect} from 'react'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderToBasket } from "../../../actions"


function AmountButtons({amount, setAmount, setTotal, price, name, foodId}) {
  const dispatch = useDispatch()


  const changeAmount = (e) => {
    e.preventDefault()
    if (amount < 10){
      setAmount(prev => {
        let now = prev
        if(e.target.name == 'add') {
          now = now + 1
        } else {
          now = now - 1
        }
        dispatch(addOrderToBasket({name: name, price: price, amount: now}))
        if (setTotal) {
          setTotal((now*price).toFixed(2))
        }
        return now
      })
    } else {
      alert('sorry, 10 is maximum number for one order')
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