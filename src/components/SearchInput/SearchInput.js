import React from 'react';

import classes from './SearchInput.css';

const searchInput = () => {
    return (
        <div className={classes.InputWrapper}>
            <input
                className={classes.Input}
                placeholder="search"
            />
        </div>

    )
};

export default searchInput;