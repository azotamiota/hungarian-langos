import React, {useState} from 'react'
import styles from './index.module.css'
function FormInput({type, labelText, placeholder , customHandler, defaultValue, name}) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (e)=>{
    let obj = e.target.value
    // customHandler(obj)
    setValue(obj)
  }

  return (
    <>
      <label>{labelText}
      <input type="text" className={styles.textInput} value={value} onChange={handleChange} placeholder={placeholder} name={name}></input>
      </label>
    </>
  )
}

export default FormInput