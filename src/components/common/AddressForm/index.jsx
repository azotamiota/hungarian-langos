import React, {useState, useEffect} from 'react'
import styles from './index.module.css'

function AddressForm({addressString, doDeliver, postcode, deliveryCost, handleSubmit, addressArray, setClientAddress, setPostcode}) {
  const array= addressString.split(',')
  const [firstLine, setFirstLine] = useState(array[0])
  const [secondLine, setSecondLine] = useState(array.length > 3 ? array[1] : '')
  const [thirdLine, setThirdLine] = useState(array.length > 4 ? array[1] : '')
  const [inputPostcode, setInputPostcode] = useState(array[array.length - 1])
  const [town, setTown] = useState(array[array.length - 2])
  const [name, setName] = useState()
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false)

  useEffect(() => {
    const array = addressString.split(',')
    setFirstLine(array[0])
    setSecondLine(array.length > 3 ? array[1] : '')
    setThirdLine(array.length > 4 ? array[1] : '')
    setInputPostcode(array[array.length - 1])
    setTown(array[array.length - 2])
  }, [addressString])

  // const revealAddressForm = () => {

  // }

  return (
    <form className={styles.contentWrapper}>
      <h1>Delivery Address</h1>
      {!doDeliver && <div>Sorry, we don't deliver to your address</div> }
      {/* {doDeliver ? <div>Delivery cost: £{deliveryCost}.00</div> : <div>Sorry, we don't deliver to your address</div> } */}
      <label htmlFor="postcode">Enter your postcode</label>
        <input text='' id='postcode'  className={styles.textInput}  onChange={(e)=> setPostcode(e.target.value)} value={postcode}></input>

      {addressArray.length > 0 && 
      <div className={styles.select}>
        <span className={styles.arrow}></span>
        <select onChange={(e) => setClientAddress(e.target.value)}>
          <option>Choose your address</option>
          {addressArray.map((el, i) => <option key={i} value={el.suggestion} >{el.suggestion}</option>)}
        </select>
      </div>}

      {/* <label htmlFor=""> */}
      <div className={styles.addressButtons}>
          <input type='submit'  className={styles.submit}  onClick={handleSubmit} value='Find your address'/>
          <input type='submit'  className={styles.submit}  onClick={() => setIsAddressFormVisible(true)} value='Enter address manually' style={{display: isAddressFormVisible ? 'none' : 'inline'}}/>
      {/* </label> */}
      </div>
      <div className={styles.checkoutInfo} style={{display: isAddressFormVisible ? 'block' : 'none'}}>
        {/* <h2>Delivery Address</h2> */}
        <label>Name <sup className={styles.mandatory}>*</sup></label>
        <input type="text" className={styles.textInput} value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your full name'></input>
        
        <label>Address line 1 <sup className={styles.mandatory}>*</sup></label>
        <input type="text" className={styles.textInput} value={firstLine} onChange={(e)=>setFirstLine(e.target.value)} placeholder='e.g. 122 Meyrick Avenue'></input>
        <label >Address line 2 (optional)</label>
        <input type="text" className={styles.textInput}  value={secondLine} onChange={(e)=>setSecondLine(e.target.value)} placeholder='Second line of your address'/>
        <label >Address line 3 (optional)</label>
        <input type="text" className={styles.textInput}  value={thirdLine} onChange={(e)=>setThirdLine(e.target.value)} placeholder='Third line of your address'/>
        <div className={styles.row}>
          <div>
            <label>Postcode <sup className={styles.mandatory}>*</sup></label>
            <input type="text" className={styles.textInput}  value={inputPostcode} onChange={(e)=>setInputPostcode(e.target.value)} placeholder='e.g. HP1 1AL'></input>
          </div>
          <div>
            <label>City/Town <sup className={styles.mandatory}>*</sup></label>
            <input type="text" className={styles.textInput} value={town} onChange={(e)=>setTown(e.target.value)} placeholder='e.g. Liverpool'></input>
          </div>
        </div>
        
        <label>Email <sup className={styles.mandatory}>*</sup></label>
        <input type="text" className={styles.textInput} placeholder='e.g. joskapista@yahoo.com'></input>
      </div>
    </form>
  )
}

export default AddressForm
