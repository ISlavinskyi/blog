import React, {Component} from 'react';
import {connect} from "react-redux";

import Post from '../Post/Post';
import Comments from '../../Comments/Comments';
import classes from './PostItem.css';

class PostItem extends Component {

    componentDidMount() {
        const postId = this.props.match.params.postId;
        const {fetching, onRequestPost, onRequestComments} = this.props;
        onRequestPost(postId);
        onRequestComments(postId);
    }

    render() {

        return (
            <div className={classes.PostItem}>
                <Post
                    id={this.props.post.id}
                    title={this.props.post.title}
                    article={this.props.post.body}
                />
                <Comments comments={this.props.comments}/>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        post: state.post,
        comments: state.comments,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPost: (postId) => dispatch({type: "API_CALL_REQUEST_POST", postId}),
        onRequestComments: (postId) => dispatch({type: "API_CALL_REQUEST_COMMENTS", postId})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);