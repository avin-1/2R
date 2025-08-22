import React from 'react';
import styles from './CommunityForumPage.module.css';

const CommunityForumPage = () => {
  return (
    <div className={styles.page}>
      <h1>Community Forum</h1>
      <p>A place for farmers to connect, ask questions, and share best practices.</p>
      {/* Placeholder for forum content */}
      <div className={styles.forumContent}>
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default CommunityForumPage;
