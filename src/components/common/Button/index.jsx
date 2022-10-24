import React from 'react'
import styles from './index.module.css'

function Button({handleSubmit, children}) {
  return (
    <label htmlFor="">
      <input type='submit'  className={styles.submit}  onClick={handleSubmit} value={children} />
    </label>
  )
}

export default Button