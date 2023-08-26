// компонент с статьями для регистрационной странички

//ColumnContainer, headerArticle, article  2-5

import React from 'react';
import styles from './ArticlesRegPage.module.sass';
import articles from './articles.json';
import CONSTANSTS from '../../constants';

export default function ArticlesRegPage () {
  return (
    <div className={styles.articlesMainContainer}>
      {articles.map((column, i) => (
        <div key={i} className={styles.ColumnContainer}>
          {column.map((article, j) => (
            <div key={j}>
              <div className={styles.headerArticles}>{article.title}</div>
              <div className={styles.article}>{article.info}</div>
            </div>
          ))}
          {i == 1 ? (
            <>
              <div className={styles.headerArticles}>
                I have other questions! How can I get in touch with Squadhelp?
              </div>
              <div className={styles.article}>
                Check out our <span className={styles.orangeSpan}>FAQs</span>
                or send us a <span className={styles.orangeSpan}>message</span>
                For assistance with launching a contest, you can also call us at{' '}
                {CONSTANSTS.CONTACT_TEL}
                or schedule a{' '}
                <span className={styles.orangeSpan}>Branding Consultation</span>
              </div>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}
