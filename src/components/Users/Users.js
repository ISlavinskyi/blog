import React from 'react';

import User from './User/User';

import clasess from './Users.css';

const users = (props) => {
    const users = props.users.map(user => <User
        key={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
        phone={user.phone}
    />);
    return (
        <div className={clasess.Users}>
            {users}
        </div>
    )
};

export default users;