import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './NamingHomeBox.module.sass';
import CONSTANTS from '../../constants';

export default function NamingHomeBox() {
  return (
    <div className={styles.naming}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <img alt="" src={`${CONSTANTS.STATIC_IMAGES_PATH}h-icon1.svg`} />
        </div>
        <img src="./test.svg" alt="" srcset="" />
        <div className={styles.des}>
          <h3>Naming Contests</h3>
          <p>
            Custom name suggestions from 100s of naming experts as you are
            guided through our naming agency-style process
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <Link
          to="/start-contests"
          
        >
          <span className={classNames(styles.button, styles.buttonBrand)}>Get a Custom Name</span>
        </Link>
      </div>
    </div>
  );
}
