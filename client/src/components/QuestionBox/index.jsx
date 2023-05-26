import React from 'react';
import styles from './QuestionBox.module.sass';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiPhone, mdiMessageText, mdiEmail, mdiEmailEdit } from '@mdi/js';

export default function QuestionBox() {
  return (
    <div className={styles.gotQuestion}>
      <div className={styles.left}>
        <h3>Got Questions?</h3>
        <p>Speak with a Squadhelp platform expert to learn more and get yourquestions answered.</p>
        <button className={classNames(styles.button, styles.buttonBorder)}>Schedule Consultation</button>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <a href="tel:(877)355-3585"><Icon path={mdiPhone} size={1} color="white"></Icon>(877) 355-3585</a>
          </li>
          <li>
            <a href=""><Icon path={mdiMessageText} size={1} color="white"></Icon>Live Chat</a>
          </li>
          <li>
            <a href=""><Icon path={mdiEmail} size={1} color="white"></Icon>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
