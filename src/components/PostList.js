import React, { Component } from 'react';

import Editor from './Editor.js';
import Post from './Post.js';

import avatar from '../assets/img/avatar.jpg';

class PostList extends Component {
  state = {
    editorText: 'No que está pensando...',
    posts: [
      {
        id: 1,
        author: {
          name: 'Lucas Silveira',
          avatar: avatar
        },
        date: '04 Jun 2019',
        content: 'Pessoal, como foi o início de ano de vocês? Espero que bem!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Roberto Carlos',
              avatar: avatar
            },
            content: 'Foi muito massa! Obrigado por perguntar :)'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Lucas Silveira',
          avatar: avatar
        },
        date: '04 Jun 2019',
        content: 'Pessoal, como foi o início de ano de vocês? Espero que bem!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Roberto Carlos',
              avatar: avatar
            },
            content: 'Foi muito massa! Obrigado por perguntar :)'
          },
          {
            id: 2,
            author: {
              name: 'Roberto Carlos',
              avatar: avatar
            },
            content: 'Foi muito massa! Obrigado por perguntar :)'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <section className="post-list">
        <Editor text={this.state.editorText} />
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </section>
    )
  }
}

export default PostList;
