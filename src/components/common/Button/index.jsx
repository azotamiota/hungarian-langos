import React from 'react'
import styles from './index.module.css'

function Button({handleSubmit}) {
  return (
    <label htmlFor="">
      <input type='submit'  className={styles.submit}  onClick={handleSubmit} />
    </label>
  )
}

export default Button