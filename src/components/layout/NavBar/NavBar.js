import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SearchInput from '../../SearchInput/SearchInput'

import classes from './NavBar.css';

class NavBar extends Component {

    render() {
        return (
            <div className={classes.header}>
                <div className={classes.HeaderContent}>
                    <div className={classes.Controls}>
                        <Link
                            to="/"
                            className={`${classes.Home} ${classes.Control}`}>
                            Home
                        </Link>
                        <Link
                            to="/posts"
                            className={classes.Control}>
                            Posts
                        </Link>
                        <Link
                            to="/users"
                            className={classes.Control}>
                            Users
                        </Link>
                    </div>
                    <SearchInput search={this.props.search}/>
                </div>
            </div>
        )
    };
}

export default NavBar;