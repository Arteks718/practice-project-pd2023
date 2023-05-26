import React from 'react';
import CONSTANTS from '../../constants';
import styles from './FeatureBox.module.sass';

export default function FeatureBox() {
  return (
    <div className={styles.featureBlock}>
      <div className={styles.container}>
        <h2>World's #1 Naming Platform</h2>
        <div className={styles.featureRow}>
          <div className={styles.featureCol}>
            <div className={styles.featureItem}>
              <div className={styles.icon}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/feature_box/star.svg`} alt="" />
              </div>
              <h3>Rated<br></br>4.9 / 5 stars</h3>
              <p>From 35K+ Customers</p>
            </div>
          </div>
          <div className={styles.featureCol}>
            <div className={styles.featureItem}>
              <div className={styles.icon}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}/feature_box/growing.svg`} alt="" />
              </div>
              <h3>
                3 Times<br></br>Inc 5000
              </h3>
              <p>Fastest Growing Companies For 3 Consecutive Years</p>
            </div>
          </div>
          <div className={styles.featureCol}>
            <div className={styles.featureItem}>
              <div className={styles.icon}>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}/feature_box/innovated.svg`}
                  alt=""
                />
              </div>
              <h3>
                Most<br></br>Innovative
              </h3>
              <p>Recognized by Inc Magazine</p>
            </div>
          </div>
          <div className={styles.featureCol}>
            <div className={styles.featureItem}>
              <div className={styles.icon}>
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}/feature_box/community.svg`}
                  alt=""
                />
              </div>
              <h3>Powerful Branding Community</h3>
              <p>Standing 200,000+ Strong</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
