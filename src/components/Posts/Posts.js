import React from 'react';

import Post from './Post/Post';

import classes from './Posts.css';

const posts = (props) => {

    const posts = props.posts.map(post => <Post
        key={post.id}
        id={post.id}
        title={post.title}
        username={post.username}
        article={post.body.substring(0,100) + '...'}
        titleClick={(event)=> props.titleClick(event, post.id)}
    />);
    return (
        <div className={classes.Posts}>
            {posts}
        </div>

    )
};

export default posts;