import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Post.css';

const post = (props) => {
    return (
        <div className={classes.PostWrapper}>
            <div className={classes.Post}>
                <Link to={`/posts/${props.id}`} style={{'textDecoration': 'none', 'color':'#000'}}>
                    <p
                        className={classes.Title}
                        // onClick={props.titleClick}
                    >{props.title}</p>
                </Link>
                <p className={classes.Body}>
                    <span>{props.article}</span>
                </p>
                <div className={classes.Footer}>
                    <p><span>Author: </span>{props.username}</p>
                    <p>timestamp</p>
                </div>
            </div>
        </div>
    )
};

export default post;