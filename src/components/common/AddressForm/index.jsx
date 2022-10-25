import React, {useState, useEffect} from 'react'
import {Button, FormInput} from '../';
import styles from './index.module.css'
import { fetchPostcodeApis, findDistance, calculateDeliveryCost } from '../../../utils'

function AddressForm() {

  const [restaurantCoord, setRestaurantCoord] = useState({longitude: -2.117319, latitude:51.472078}) //TODO this should come from the store too
  const [clientCoord, setClientCoord] = useState({longitude: 0, latitude: 0})
  const [postcode, setPostcode] = useState('')
  const [addressArray, setAddressArray] = useState([]) 
  const [deliveryCost, setDeliveryCost] = useState(0)
  const [doDeliver, setDoDeliver] = useState(true)
  const [distance, setDistance] = useState(0)
  const [clientAddress, setClientAddress] = useState('')   
  
  const handleSubmit = (e) =>  {
    e.preventDefault()
    fetchPostcodeApis(e, postcode, setAddressArray, setClientCoord)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.form.firstLine.value)
  }
  const handleSelectOnChange = (e) => {
    const array = e.target.value.split(',')
    const obj = {
      firstLine: array[0],
      secondLine: array.length > 3 ? array[1] : '',
      thirdLine: array.length > 4 ? array[1] : '',
      postcode: array[array.length - 1],
      town: array[array.length - 2],
    }
    setClientAddress(obj)
  }

  useEffect(() => {
    const cost = findDistance(restaurantCoord, clientCoord, setDistance)
    setDeliveryCost(cost)
  }, [clientCoord])
  

  useEffect(() => {
    console.log(deliveryCost)
    if (deliveryCost == -1) {
      setDoDeliver(false)
    } else {
      setDoDeliver(true)
    }
  }, [deliveryCost])

  useEffect(() => {
    console.log('here', clientAddress)
  }, [clientAddress])
  return (
    <form className={styles.contentWrapper} id="myform">
      <h1>Checkout</h1>
      {doDeliver ? <div>Delivery cost: £{deliveryCost}.00</div> : <div>Sorry, we don't deliver to your address</div> }
      {/* here is the problem */} 
      <label htmlFor="postcode">
        <input text='' id='postcode'  className={styles.textInput}  onChange={(e)=> setPostcode(e.target.value)} value={postcode}></input>
      </label>
      {addressArray.length > 0 && 
      <div className={styles.select}>
        <span className={styles.arrow}></span>
        <select onChange={handleSelectOnChange}>
          <option>choose your address</option>
          {addressArray.map((el, i) => <option key={i} value={el.suggestion} >{el.suggestion}</option>)}
        </select>
      </div>}
      <Button handleSubmit={handleSubmit}>Address lookup</Button>
      <div className={styles.checkoutInfo}>
      <h2>Delivery Address</h2>
      <FormInput type='text' labelText='Your name' placeholder='full name' />
      <FormInput type='text' labelText='First line of address' placeholder='first line' defaultValue={clientAddress.firstLine} name='firstLine'/>
      <FormInput type='text' labelText='Second line of address (optional)' placeholder='second line' name='secondLine'/>
      <FormInput type='text' labelText='Third line of address (optional)' placeholder='third line' />
      <div className={styles.row}>
          <FormInput type='text' labelText='Postcode' placeholder='postcode' name='postcode' />
          <FormInput type='text' labelText='City/Town' placeholder='town' name='town'/>
      </div>
      <FormInput type='text' labelText='Email' placeholder='example@gmail.com' />
      </div>
      <Button handleSubmit={handleFormSubmit} form="myform"/>
    </form>
  )
}

export default AddressForm