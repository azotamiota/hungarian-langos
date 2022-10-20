import React from 'react'
import AmountButtons from '../AmountButtons';
import styles from './index.module.css'
function BasketCard({item, index}) {
  return (
    <div className={styles.root}>
      <div className={styles.number}>{index + 1} </div>
      <div className={styles.description}>
        <span className={styles.title}>{item.name} </span>
        <label className={styles.inputLabel} htmlFor={'notes-' + index}>Additonal Information</label>
        <textarea className={styles.input}></textarea>
      </div>
      <div className={styles.amountChange}>
        <AmountButtons />
      </div>
      <span>{(item.amount*item.price).toFixed(2)}</span>
    </div>
  )
}

export default BasketCard