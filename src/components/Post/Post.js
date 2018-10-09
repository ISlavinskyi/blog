import React from 'react';

import classes from './Post.css';

const post = (props) => {
    return (
        <div className={classes.PostWrapper}>
            <div className={classes.Post}>
                <p className={classes.Title}>{props.title}</p>
                <p className={classes.Body}>
                    <span>{props.article}</span>
                </p>
                <div className={classes.Footer}>
                    <p>Author</p>
                    <p>timestamp</p>
                </div>
            </div>
        </div>
    )
};

export default post;