import React from 'react';

import Comment from './Comment'

function Post({ data }) {
  return (
    <div className="post">
      <header>
        <img width="50" src={data.author.avatar} alt="" />
        <div className="post-author-date">
          <p>{data.author.name}</p>
          <p><small>{data.date}</small></p>
        </div>
      </header>
      <main>
        {data.content}
      </main>
      <footer>
        {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </footer>
    </div>
  )
}

export default Post;
