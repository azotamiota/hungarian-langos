import axios from 'axios'

export const fetchPostcodeApis = async (e, postcode, setAddressArray, setClientCoord) => {

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

export  const findDistance = async (restaurantCoord, clientCoord, setDistance) => {
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

export const calculateDeliveryCost = (distance, setDeliveryCost) => {
  //TODO the price and distance should be settable from the admin page by the restaurant
  if (distance < 2) {
    setDeliveryCost(0) 
  } else if ( distance < 6) {
    setDeliveryCost(3)
  } else {
    setDeliveryCost(-1)
  }
}