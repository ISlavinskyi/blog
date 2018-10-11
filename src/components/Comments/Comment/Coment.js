import React from 'react';

import classes from './Comment.css';

const Comment = (props) => {
    return(
        <div className={classes.Comment}>
            <p># {props.index}</p>
            <p>{props.name}</p>
            <p>{props.body}</p>
        </div>
    )
};

export default Comment;