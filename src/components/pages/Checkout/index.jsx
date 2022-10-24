import React, {useState, useEffect} from 'react'
import axios from 'axios'

import styles from './index.module.css'
import { AddressForm, BasketContent, Container } from '../../common'
import { fetchPostcodeApis, findDistance, calculateDeliveryCost } from '../../../utils'


function Checkout() {
  const [restaurantCoord, setRestaurantCoord] = useState({longitude: -2.117319, latitude:51.472078}) //TODO this should come from the store too
  const [clientCoord, setClientCoord] = useState({longitude: 0, latitude: 0})
  const [postcode, setPostcode] = useState('')
  const [addressArray, setAddressArray] = useState([]) 
  const [deliveryCost, setDeliveryCost] = useState(0)
  const [doDeliver, setDoDeliver] = useState(true)
  const [distance, setDistance] = useState(0)
  const [clientAddress, setClientAddress] = useState('')
  

  useEffect(() => {
    findDistance(restaurantCoord, clientCoord, setDistance)
  }, [clientCoord])

  useEffect(() => {
    calculateDeliveryCost(distance, setDeliveryCost)
  }, [distance])

  useEffect(() => {
    console.log(deliveryCost)
    if (deliveryCost == -1) {
      setDoDeliver(false)
    } else {
      setDoDeliver(true)
    }
  }, [deliveryCost])

  useEffect(() => {
    console.log('here' + clientAddress)
  }, [clientAddress])

  return (
    <Container>
      <BasketContent />
      <div className={styles.delivery}>
        <h1>Delivery</h1>
        {doDeliver ? <div>Delivery cost: {deliveryCost}</div> : <div>Sorry, we don't deliver to your address</div> }
        <label htmlFor="postcode">Enter delivery postcode</label>
        <input text='' id='postcode' onChange={(e)=> setPostcode(e.target.value)} value={postcode}></input>
        <button onClick={(e) =>   fetchPostcodeApis(e, postcode, setAddressArray, setClientCoord)}>Submit</button>
      </div>
      {addressArray.length > 0 && 
      <div>
        <select className={styles.delivery} onChange={(e) => setClientAddress(e.target.value)}>
          <option>choose your address</option>
          {addressArray.map((el, i) => <option key={i} value={el.suggestion} >{el.suggestion}</option>)}
        </select>
      </div>}
      <AddressForm addressString={clientAddress}/>
    </Container>
  )
}

export default Checkout