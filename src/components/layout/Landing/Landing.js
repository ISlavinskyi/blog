import React from 'react';

import Post from '../../Post/Post';

import classes from './Landing.css';

const landing = (props) => {
    const posts = props.posts.map(post => <Post
        key={post.id}
        title={post.title}
        username={post.username}
        article={post.body.substring(0,100) + '...'}
    />);
    return (
        <div className={classes.LandingWrapper}>
            {posts}
        </div>
    )
};

export default landing;