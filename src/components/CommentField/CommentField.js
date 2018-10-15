import React, {Component} from 'react';

import classes from './CommentField.css';

class CommentField extends Component {
    state = {
        name: 'anonymous',
        body: ''
    };

    render() {

        const saveToStorage = () => {
            // localStorage.setItem('comment', JSON.stringify(this.state));
            // this.props.addCommentHandler();
           console.log(this.props.addCommentHandler)
        };

       const textAreaChangedHandler = (event) => {
          const comment ={ ...this.state };
          comment.body = event.target.value;
          this.setState({
              ...comment
          });
        };

        return(
            <div className={classes.CommentField}>
                <textarea
                    name="comment"
                    rows="4"
                    placeholder="New anonymous comment"
                    className={classes.TextArea}
                    onChange={(event)=>textAreaChangedHandler(event)}
                />
                <input
                    type="button"
                    value="add comment"
                    className={classes.Button}
                    onClick={() => this.props.addComment(this.state)}
                />
            </div>

        )
    }
}

export default CommentField;