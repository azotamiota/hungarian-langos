import React, {useState, useEffect} from 'react'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderToBasket } from "../../../actions"


function AmountButtons({amount, setAmount, setTotal, price, name, foodId}) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addOrderToBasket({name: name, price: price, amount: amount}))
  })

  const addOne = (e) => {
    e.preventDefault()
    if (amount < 10){
      setAmount(prev => {
        let now = prev + 1
        if (setTotal) {
          setTotal((now*price).toFixed(2))
        }
        return now
      })
      // dispatch(addOrderToBasket())
    } else {
      alert('sorry, 10 is maximum number for one order')
    }
  }
  const takeOne = (e) => {
    e.preventDefault()
    if (amount > 0){
      setAmount(prev => {
        let now = prev - 1
        if (setTotal) {
          setTotal((now*price).toFixed(2))
        }
        return now
      })
    }
  }

  return (
    <div className={styles.toBasket}>
      <button className={styles.changeAmount} onClick={(e) => addOne(e)}>➕</button>
      <div>{amount}</div>
      <button className={styles.changeAmount} onClick={(e) => takeOne(e)}>➖</button>
    </div>
  )
}

export default AmountButtons