import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Our Agency</div>
      <div className={styles.text}>We are creating the agency. All rights reserved!</div>
    </div>
  )
}

export default Footer
