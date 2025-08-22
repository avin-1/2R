import React from 'react';
import { useParams } from 'react-router-dom';
import { forumTopics } from '../data/forumData';
import styles from '../components/Forum.module.css';

const TopicPage = () => {
  const { topicId } = useParams();
  const topic = forumTopics.find(t => t.id === parseInt(topicId));

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div>
      <h1>{topic.title}</h1>
      {topic.posts.map(post => (
        <div key={post.id} className={styles.post}>
          <p className={styles.postMeta}>by {post.author} on {post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TopicPage;
