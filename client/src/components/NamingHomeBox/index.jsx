import React from 'react';
import styles from './NamingHomeBox.module.sass';
import CONSTANTS from '../../constants';

export default function NamingHomeBox (props) {
  return (
    <div className={styles.naming}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <img alt='' src={`${CONSTANTS.STATIC_IMAGES_PATH}h-icon1.svg`} />
        </div>
        <div className={styles.des}>
          <h3>Naming Contests</h3>
          <p>
            Custom name suggestions from 100s of naming experts as you are
            guided through our naming agency-style process
          </p>
        </div>
        <p></p>
      </div>
      <div className={styles.right}>
        <a href='/start-contest' className={styles.button_brand}>
          <span>Get a Custom Name</span>
        </a>
      </div>
    </div>
  );
}
