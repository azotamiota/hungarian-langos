import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AmountButtons from '../AmountButtons'
import { updateBasket } from "../../../actions"

import styles from './index.module.css'

function BasketCard({name, price}) {

  const dispatch = useDispatch()
  const actualProduct = useSelector(state => state.order.products.filter(prod => prod.name === name))


  return (

    <>{actualProduct[0]['amount'] > 0 &&
      <div className={styles.root}> 
        {/* <div className={styles.number}>{index + 1} </div> */}
        <img className={styles.foodImage} src='https://images.unsplash.com/photo-1602881916963-5daf2d97c06e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt=''/>
        {/* <div className={styles.description}> */}
          <div className={styles.title}>{name}</div>
        {/* </div> */}
        <div className={styles.amountChange}>
          <AmountButtons name={name} price={price} amount={actualProduct.length > 0 ? actualProduct[0]['amount'] : 0}/> 
        </div>
        <div>{actualProduct.length > 0 && '£' + (actualProduct[0]['amount'] * price).toFixed(2)}</div>
        <div className={styles.closeBasket} onClick={() => dispatch(updateBasket({name: name, price: price, amount: 0}))
}>❌</div>

      </div>}
    </>

  )
}

export default BasketCard
