import React, {useState} from 'react'
import styles from './index.module.css'
function AmountButtons() {
  const [ count, setCount ] = useState(0) 
  const addOne = (e) => {
    e.preventDefault()
    if (count < 10){
      setCount(prev => prev + 1)
    } else {
      alert('sorry, 10 is maximum number for one order')
    }
  }
  const takeOne = (e) => {
    e.preventDefault()
    if (count > 0){
      setCount(prev => prev - 1)
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