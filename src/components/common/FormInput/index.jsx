import React, {useState} from 'react'
import styles from './index.module.css'
function FormInput({type, labelText, placeholder , customHandler}) {
  const [value, setValue] = useState()

  const handleChange = (e)=>{
    let obj = e.target.value
    // customHandler(obj)
    setValue(obj)
  }

  return (
    <>
      <label>{labelText}
      <input type="text" className={styles.textInput} value={value} onChange={handleChange} placeholder={placeholder}></input>
      </label>
    </>
  )
}

export default FormInput