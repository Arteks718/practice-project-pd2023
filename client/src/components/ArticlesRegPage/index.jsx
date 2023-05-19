import React from 'react';
import styles from './ArticlesRegPage.module.sass';
import Article from './article.json';

export default function ArticlesRegPage() {
  return (
    <div className={styles.articlesMainContainer}>
      <div className={styles.ColumnContainer}>
        <div className={styles.headerArticle}>{Article[0][0].title}</div>
        <div className={styles.article}>{Article[0][0].info}</div>
        <div className={styles.headerArticle}>{Article[0][1].title}</div>
        <div className={styles.article}>{Article[0][1].info}</div>
      </div>
      <div className={styles.ColumnContainer}>
        <div className={styles.headerArticle}>{Article[1][0].title}</div>
        <div className={styles.article}>{Article[1][0].info}</div>
        <div className={styles.headerArticle}>{Article[1][1].title}</div>
        <div className={styles.article}>{Article[1][1].info}</div>
        <div className={styles.headerArticle}>{Article[1][2].title}</div>
        <div className={styles.article}>{Article[1][2].info}</div>
        <div className={styles.headerArticle}>{Article[1][3].title}</div>
        <div className={styles.article}>{Article[1][3].info}</div>
        <div className={styles.headerArticle}>{Article[1][4].title}</div>
        <div className={styles.article}>Check out our <a href='#' className={styles.orangeSpan}>FAQs</a> or send us a <a href="#" className={styles.orangeSpan}>message</a>. For assistance with launching a contest, you can also call us at (877) 355-3585 or schedule a <a href="#" className={styles.orangeSpan}>Branding Consultation</a></div>
      </div>
    </div>
  );
}
