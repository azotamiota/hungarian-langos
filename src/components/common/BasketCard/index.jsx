import React, {useState} from 'react'
import AmountButtons from '../AmountButtons';
import styles from './index.module.css'
function BasketCard({item, index}) {
  const [total, setTotal] = useState((item.amount*item.price).toFixed(2))
  const [amount, setAmount ] = useState(item.amount)
  return (
      //TODO total has to be later changed to amount, when redux is connected.
    <>
      {total > 0 ? <div className={styles.root}> 
        <div className={styles.number}>{index + 1} </div>
        <div className={styles.description}>
          <span className={styles.title}>{item.name} </span>
          <label className={styles.inputLabel} htmlFor={'notes-' + index}>Additonal Information</label>
          <textarea className={styles.input}></textarea>
        </div>
        <div className={styles.amountChange}>
          <AmountButtons amount={amount} name={item.name} setAmount={setAmount} setTotal={setTotal} price={item.price}/>
        </div>
        <span>{total}</span>
      </div> : ''}
    </>
  )
}

export default BasketCard