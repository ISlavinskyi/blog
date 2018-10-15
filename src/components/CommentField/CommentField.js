import React, {Component} from 'react';

import classes from './CommentField.css';

class CommentField extends Component {
    state = {
        name: 'anonymous',
        body: ''
    };

    render() {

        const onAddComment = () => {
            this.props.addComment(this.state);

            this.textRef.value = '';
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
                    ref={(ref) => this.textRef = ref}
                    onChange={(event)=>textAreaChangedHandler(event)}
                />
                <input
                    type="button"
                    value="add comment"
                    className={classes.Button}
                    onClick={() => onAddComment()}
                />
            </div>

        )
    }
}

export default CommentField;