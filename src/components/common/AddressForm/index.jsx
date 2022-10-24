import React, {useState, useEffect} from 'react'
import Button from '../Button';
import styles from './index.module.css'
import { fetchPostcodeApis, findDistance, calculateDeliveryCost } from '../../../utils'

function AddressForm() {

  const [name, setName] = useState()
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
    <form className={styles.contentWrapper}>
      <h1>Checkout</h1>
      {doDeliver ? <div>Delivery cost: £{deliveryCost}.00</div> : <div>Sorry, we don't deliver to your address</div> }
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

      <Button handleSubmit={handleSubmit}>Submit</Button>

      <div className={styles.checkoutInfo}>
      <h2>Delivery Address</h2>
      <label >Your name</label>
      <input type="text" className={styles.textInput} value={name} onChange={(e)=>setName(e.target.value)} placeholder='full name'></input>
      
      <label >First line of address</label>
      <input type="text" className={styles.textInput} value={clientAddress.firstLine} onChange={(e)=>setClientAddress({...clientAddress, firstLine:  e.target.value})} placeholder='first line'></input>
      <label >Second line (optional)</label>
      <input type="text" className={styles.textInput}  value={clientAddress.secondLine} onChange={(e)=>setClientAddress({...clientAddress, secondLine:  e.target.value})} placeholder='second line' />
      <label >Third line (optional)</label>
      <input type="text" className={styles.textInput}  value={clientAddress.thirdLine} onChange={(e)=>setClientAddress({...clientAddress, thirdLine:  e.target.value})} placeholder='third line' />
      <div className={styles.row}>
        <div>
          <label>Postcode</label>
          <input type="text" className={styles.textInput}  value={clientAddress.postcode} onChange={(e)=>setClientAddress({...clientAddress, postcode:  e.target.value})} placeholder='postcode'></input>
        </div>
        <div>
          <label >City/Town</label>
          <input type="text" className={styles.textInput} value={clientAddress.town} onChange={(e)=>setClientAddress({...clientAddress, town:  e.target.value})} placeholder='postcode'></input>
        </div>
      </div>
      
      <label >Email</label>
      <input type="text" className={styles.textInput} placeholder='example@gmail.com'></input>
      </div>
    </form>
  )
}

export default AddressForm