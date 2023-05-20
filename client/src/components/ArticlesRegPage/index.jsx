import React from 'react';
import styles from './ArticlesRegPage.module.sass';
import articles from './article.json';

export default function ArticlesRegPage() {
  return (
    <div className={styles.articlesMainContainer}>
      {articles.map((column, i) => 
      (<div key={i} className={styles.ColumnContainer}>
        {column.map((data, j) => (
          <div key={j}>
            <div className={styles.headerArticle}>{data.title}</div>
            <div className={styles.article}>{data.info}</div>
          </div>
        ))}
        {
          i == 1 ?
        <>
          <div className={styles.headerArticle}>I have other questions! How can I get in touch with Squadhelp?</div>
          <div className={styles.article}>Check out our <a href='#' className={styles.orangeSpan}>FAQs</a> or send us a <a href="#" className={styles.orangeSpan}>message</a>. For assistance with launching a contest, you can also call us at (877) 355-3585 or schedule a <a href="#" className={styles.orangeSpan}>Branding Consultation</a></div>
        </> : null
        }
        
      </div>))} 
    </div>
  );
}
