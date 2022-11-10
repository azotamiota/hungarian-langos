import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

// import styles from './index.module.css'
import { AddressForm, BasketContent, Container } from '../../common'
import { fetchPostcodeApis, findDistance, calculateDeliveryCost } from '../../../utils'


function Checkout() {

  const restaurantCoord = useSelector(state => state.restaurantCoord)

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

  useEffect(() => {
    findDistance(restaurantCoord, clientCoord, setDistance)
  }, [clientCoord])

  useEffect(() => {
    calculateDeliveryCost(distance, setDeliveryCost)
  }, [distance])

  useEffect(() => {
    console.log(deliveryCost)
    if (deliveryCost === -1) {
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
      <AddressForm addressString={clientAddress} postcode={postcode} setPostcode={setPostcode} doDeliver={doDeliver} deliveryCost={deliveryCost} handleSubmit={handleSubmit} addressArray={addressArray} setClientAddress={setClientAddress}/>
    </Container>
  )
}

export default Checkout
