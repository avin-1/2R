import React from 'react';
import { Link } from 'react-router-dom';
import { forumTopics } from '../data/forumData';
import styles from './Forum.module.css';

const TopicList = () => {
  return (
    <div className={styles.topicList}>
      <h2>Topics</h2>
      {forumTopics.map(topic => (
        <div key={topic.id} className={styles.topicItem}>
          <h3><Link to={`/forum/${topic.id}`}>{topic.title}</Link></h3>
          <p>by {topic.author} on {topic.date}</p>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
