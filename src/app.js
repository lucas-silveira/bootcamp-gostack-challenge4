import React from 'react';
import './assets/css/style.css';

import Header from './components/Header';
import PostList from './components/PostList';

function app() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}

export default app;
