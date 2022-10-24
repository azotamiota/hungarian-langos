import React from 'react'
import { useSelector } from 'react-redux'
import AmountButtons from '../AmountButtons'
import styles from './index.module.css'

function BasketCard({index, name, price}) {

  const actualAmount = useSelector(state => state.order.products.filter(prod => prod.name === name))

  return (

    <>{actualAmount[0]['amount'] > 0 &&
      <div className={styles.root}> 
        <div className={styles.number}>{index + 1} </div>
        <div className={styles.description}>
          <span className={styles.title}>{name} </span>
          <label className={styles.inputLabel} htmlFor={'notes-' + index}>Additonal Information</label>
          <textarea className={styles.input}></textarea>
        </div>
        <div className={styles.amountChange}>
          <AmountButtons name={name} price={price} amount={actualAmount.length > 0 ? actualAmount[0]['amount'] : 0}/> 
        </div>
        <span>{actualAmount.length > 0 && (actualAmount[0]['amount'] * price).toFixed(2)}</span>
      </div>}
    </>

  )
}

export default BasketCard
