import React from 'react'
import styles from './NamingContests.module.sass'
import classNames from 'classnames'
import CONSTANTS from '../../constants'

export default function NamingContests() {
  return (
    <div className={styles.naming}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <img alt="" src={`${CONSTANTS.STATIC_IMAGES_PATH}h-icon1.svg`} />
        </div>
        <img src="./test.svg" alt="" srcset="" />
        <div className={styles.des}>
          <h3>Naming Contests</h3>
          <p>Custom name suggestions from 100s of naming experts as you are guided through our naming agency-style process</p>                    
        </div>
      </div>

      <div className={styles.right}>
        <a href="" className={classNames(styles.button, styles.buttonBrand)}><span>Get a Custom Name</span></a>
      </div>
    </div>
  )
}
