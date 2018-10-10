import React from 'react';

import classes from './User.css';

const user = (props) => {
    return (
       <div className={classes.Card}>
            <div className={classes.Item}><span>User Name:</span><span className={classes.Content}>{props.username}</span></div>
            <div className={classes.Item}><span>Name:</span><span className={classes.Content}>{props.name}</span></div>
            <div className={classes.Item}><span>Email:</span><span className={classes.Content}>{props.email}</span></div>
            <div className={classes.Item}><span>Phone:</span><span className={classes.Content}>{props.phone}</span></div>
       </div>
    )
};

export default user;