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
  useEffect(() => {
    const array = addressString.split(',')
    setFirstLine(array[0])
    setSecondLine(array.length > 3 ? array[1] : '')
    setThirdLine(array.length > 4 ? array[1] : '')
    setInputPostcode(array[array.length - 1])
    setTown(array[array.length - 2])
  }, [addressString])
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
        <select onChange={(e) => setClientAddress(e.target.value)}>
          <option>choose your address</option>
          {addressArray.map((el, i) => <option key={i} value={el.suggestion} >{el.suggestion}</option>)}
        </select>
      </div>}

      <label htmlFor="">
          <input type='submit'  className={styles.submit}  onClick={handleSubmit} />
      </label>

      <div className={styles.checkoutInfo}>
      <h2>Delivery Address</h2>
      <label >Your name</label>
      <input type="text" className={styles.textInput} value={name} onChange={(e)=>setName(e.target.value)} placeholder='full name'></input>
      
      <label >First line of address</label>
      <input type="text" className={styles.textInput} value={firstLine} onChange={(e)=>setFirstLine(e.target.value)} placeholder='first line'></input>
      <label >Second line (optional)</label>
      <input type="text" className={styles.textInput}  value={secondLine} onChange={(e)=>setSecondLine(e.target.value)} placeholder='second line' />
      <label >Third line (optional)</label>
      <input type="text" className={styles.textInput}  value={thirdLine} onChange={(e)=>setThirdLine(e.target.value)} placeholder='third line' />
      <div className={styles.row}>
        <div>
          <label>Postcode</label>
          <input type="text" className={styles.textInput}  value={inputPostcode} onChange={(e)=>setInputPostcode(e.target.value)} placeholder='postcode'></input>
        </div>
        <div>
          <label >City/Town</label>
          <input type="text" className={styles.textInput} value={town} onChange={(e)=>setTown(e.target.value)} placeholder='postcode'></input>
        </div>
      </div>
      
      <label >Email</label>
      <input type="text" className={styles.textInput} placeholder='example@gmail.com'></input>
      </div>
    </form>
  )
}

export default AddressForm