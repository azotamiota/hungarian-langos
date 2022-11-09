import React from 'react'
import { useSelector } from 'react-redux'

import styles from './index.module.css'
import { BasketCard } from '../'



function BasketContent() {

  const orderTotal = useSelector(state => state.order.total)
  const basketData = useSelector(state => state.order)

  return (
    <div>
      <p className={styles.title}>Your basket:</p> 
      <div>{basketData.products.length > 0 ? 
      basketData.products.map((item, index) => (<div key={index}>
        <BasketCard index={index} name={item.name} price={item.price}/>
      </div>))
      : 'Add your order to proceed'}</div>
      <hr
        style={{
          background: '#b46f06',
          color: '#b46f06',
          borderColor: '#b46f06',
          height: '3px',
          width: '90%',
          margin: '0 5%',
        }}
      />
      <div className={styles.summary}>
        <div>total: <span>£{orderTotal}</span></div>
      </div>
    </div>
  )
}

export default BasketContent
