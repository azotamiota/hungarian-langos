import React from 'react'
import styles from './index.module.css'

function Button({handleSubmit, children, form=''}) {
  console.log(handleSubmit)
  return (
    <label>
      <input type='submit'  className={styles.submit}  onClick={handleSubmit} value={children} form={form}/>
    </label>
  )
}

export default Button