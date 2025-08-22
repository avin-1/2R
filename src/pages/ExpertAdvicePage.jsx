import React from 'react';
import styles from './ExpertAdvicePage.module.css';
import formStyles from '../components/Form.module.css';
import { mockExpertAdvice } from '../data/mockData';
import { FaQuestionCircle } from 'react-icons/fa';

const ExpertAdvicePage = () => {
  return (
    <div className={styles.page}>
      <h1>Expert Advice</h1>
      <p className={styles.subtitle}>Find answers to common questions or ask our experts directly.</p>

      <div className={styles.content}>
        <div className={styles.faqSection}>
          <h2><FaQuestionCircle /> Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {mockExpertAdvice.map(faq => (
              <div key={faq.id} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.askExpertSection}>
          <div className={formStyles.formContainer}>
            <h2 style={{ textAlign: 'center' }}>Ask an Expert</h2>
            <form className={formStyles.form}>
              <div className={formStyles.formGroup}>
                <label htmlFor="topic">Topic</label>
                <input type="text" id="topic" placeholder="e.g., Soil Health, Pest Control" />
              </div>
              <div className={formStyles.formGroup}>
                <label htmlFor="question">Your Question</label>
                <textarea id="question" rows="5" placeholder="Describe your question in detail..."></textarea>
              </div>
              <button type="submit" className={formStyles.button}>Submit Question</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvicePage;
