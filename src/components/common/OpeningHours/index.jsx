import React from 'react'
import styles from './index.module.css'
function index() {
  return (
    <div className={styles.root}>
      <u><header className={styles.hedaer}><span className='red-letters'>Opening</span><span className='green-letters'> hours</span></header></u>
      <div id="opening-hours">
        <div>Monday</div>
        <div>Closed</div>
        <div>Tuesday</div>
        <div>9:00 - 13:00</div>
        <div>Wednesday</div>
        <div>9:00 - 13:00</div>
        <div>Thursday</div>
        <div>9:00 - 13:00</div>
        <div>Friday</div>
        <div>9:00 - 14:00</div>
        <div>Saturday</div>
        <div>9:00 - 15:00</div>
        <div>Sunday</div>
        <div>Closed</div>
      </div>
    </div>
  )
}

export default index