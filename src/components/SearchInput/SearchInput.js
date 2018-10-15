import React, {Component} from 'react';

import classes from './SearchInput.css';

class SearchInput extends Component {
    render() {


        return (
            <div className={classes.InputWrapper}>
                <input
                    className={classes.Input}
                    placeholder="search"
                    onChange={(event) => this.props.search(event.target.value)}
                />
            </div>

        )
    }
}

export default SearchInput;