import React, {useState} from 'react'
import axios from 'axios'
import { BasketContent, Container } from '../../common'
import styles from './index.module.css'
import { useEffect } from 'react';

function Checkout() {
  const [restaurantCoord, setRestaurantCoord] = useState({longitude: -2.117319, latitude:51.472078}) //TODO this should come from the store too
  const [clientCoord, setClientCoord] = useState({longitude: 0, latitude: 0})
  const [postcode, setPostcode] = useState('')
  const [addressArray, setAddressArray] = useState([]) 
  const [deliveryCost, setDeliveryCost] = useState(0)
  const [doDeliver, setDoDeliver] = useState(true)
  const [distance, setDistance] = useState(0)
  
  const fetchPostcodeApis = async (e) => {
    e.preventDefault()
    const url = 'https://uk-post-code-address-look-up.p.rapidapi.com/json/address/' + postcode.toLocaleLowerCase()
    const headers = {
      'X-RapidAPI-Key': '4c6ab7ac0emshdbf497fe5fde08bp1e125cjsn195e515325cc',
      'X-RapidAPI-Host': 'uk-post-code-address-look-up.p.rapidapi.com'
    }
    const addressData = await axios.get(url, {headers})
    setAddressArray(addressData.data)
    
    const urlForDeliveryCost = 'https://api.postcodes.io/postcodes/' + postcode.toUpperCase()
    const areaData = await axios.get(urlForDeliveryCost)
    setClientCoord({longitude: areaData.data.result.longitude, latitude: areaData.data.result.latitude})
  }
  
  useEffect(() => {
    const findDistance = async () => {
      const options = {
        method: 'GET',
        url: 'https://distance-calculator.p.rapidapi.com/distance/simple',
        params: {
          lat_1: restaurantCoord.latitude,
          long_1: restaurantCoord.longitude,
          lat_2: clientCoord.latitude,
          long_2: clientCoord.longitude,
          unit: 'miles',
          decimal_places: '2'
        },
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '4c6ab7ac0emshdbf497fe5fde08bp1e125cjsn195e515325cc',
          'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
        }
      }
      if (clientCoord.latitude != 0) {
        const request = await axios.request(options) 
        setDistance(request.data.distance)
      }
      
    }
    findDistance()
  }, [clientCoord])
  useEffect(() => {
    if (distance < 2) {
      setDeliveryCost(0) 
    } else if ( distance < 6) {
      setDeliveryCost(3)
    } else {
      setDeliveryCost(-1)
    }
  }, [distance])

  useEffect(() => {
    console.log(deliveryCost)
    if (deliveryCost == -1) {
      setDoDeliver(false)
    } else {
      setDoDeliver(true)
    }
  }, [deliveryCost])

  return (
    <Container>
      <BasketContent />
      <div className={styles.delivery}>
        <h1>Delivery</h1>
        {doDeliver ? <div>Delivery cost: {deliveryCost}</div> : <div>Sorry, we don't deliver to your address</div> }
        <label htmlFor="postcode">Enter delivery postcode</label>
        <input text='' id='postcode' onChange={(e)=> setPostcode(e.target.value)} value={postcode}></input>
        <button onClick={fetchPostcodeApis}>Submit</button>
      </div>
      {addressArray.length > 0 && 
      <div>
        <select>
          {addressArray.map((e, i) => <option key={i}>{e.suggestion}</option>)}
        </select>
      </div>}
    </Container>
  )
}

export default Checkout