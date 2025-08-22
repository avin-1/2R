import React from 'react';
import styles from './CommunityForumPage.module.css';
import { mockForumPosts } from '../data/mockData';
import { FaPlus } from 'react-icons/fa';

const CommunityForumPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Community Forum</h1>
        <button className={styles.newPostButton}>
          <FaPlus /> New Post
        </button>
      </div>
      <p className={styles.subtitle}>A place for farmers to connect, ask questions, and share best practices.</p>

      <div className={styles.postList}>
        {mockForumPosts.map(post => (
          <div key={post.id} className={styles.postItem}>
            <div className={styles.postInfo}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postAuthor}>by {post.author}</p>
            </div>
            <div className={styles.postMeta}>
              <p>{post.replies} replies</p>
              <p>Last reply {post.lastReply}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForumPage;
