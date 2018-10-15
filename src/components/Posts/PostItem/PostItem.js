import React, {Component} from 'react';
import {connect} from "react-redux";

import Post from '../Post/Post';
import Comments from '../../Comments/Comments';
import CommentField from '../../CommentField/CommentField';

import classes from './PostItem.css';

class PostItem extends Component {

    componentDidMount() {
        const postId = this.props.match.params.postId;
        const {onRequestPost, onRequestComments} = this.props;
        onRequestPost(postId);
        onRequestComments(postId);
    }

    addCommentHandler = (data) => {
        const {onAddComment} = this.props;
        const postId = this.props.post.id;
        let allComments = this.props.comments;
        let commentId = this.props.comments.length+1;
        const newComment = Object.assign({}, {id: commentId, postId}, data);

        onAddComment(allComments, newComment);
    };

    render() {

        return (
            <div className={classes.PostItem}>
                <Post
                    id={this.props.post.id}
                    title={this.props.post.title}
                    article={this.props.post.body}
                />
                <Comments comments={this.props.comments}/>
                <CommentField comments={this.props.comments} addComment={this.addCommentHandler}/>
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
        onRequestComments: (postId) => dispatch({type: "API_CALL_REQUEST_COMMENTS", postId}),
        onAddComment: (allComments, newComment) => dispatch({type: "API_CALL_ADD_COMMENT", allComments, newComment})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);