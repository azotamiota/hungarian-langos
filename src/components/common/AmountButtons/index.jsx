import React, {useState} from 'react'
import styles from './index.module.css'
function AmountButtons({amount, setTotal, price}) {
  const [ count, setCount ] = useState(amount) 
  const addOne = (e) => {
    e.preventDefault()
    if (count < 10){
      setCount(prev => {
        let now = prev + 1
        if (setTotal) {
          setTotal((now*price).toFixed(2))
        }
        return now
      })
    } else {
      alert('sorry, 10 is maximum number for one order')
    }
  }
  const takeOne = (e) => {
    e.preventDefault()
    if (count > 0){
      setCount(prev => {
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
      <div>{count}</div>
      <button className={styles.changeAmount} onClick={(e) => takeOne(e)}>➖</button>
    </div>
  )
}

export default AmountButtons