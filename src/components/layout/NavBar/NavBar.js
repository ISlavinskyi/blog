import React from 'react';

import SearchInput from '../../SearchInput/SearchInput'

import classes from './NavBar.css';

const navBar = (props) => {
    return (
    <div className={classes.header}>
        <SearchInput/>
    </div>
    )
};

export default navBar;