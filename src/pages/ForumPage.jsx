import React from 'react';
import TopicList from '../components/TopicList';
import { useTranslation } from 'react-i18next';

const ForumPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('nav_forum')}</h1>
      <TopicList />
    </div>
  );
};

export default ForumPage;
