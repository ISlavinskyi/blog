import React, {Component} from 'react';
import {connect} from "react-redux";

class PostItem extends Component{

    componentDidMount() {
        const postId = this.props.match.params.postId;
        const {fetching, onRequestPost} = this.props;
             onRequestPost(postId);
    }

    render() {

        return(
            <div>
                {this.props.post.body}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        post: state.post,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPost: (postId) => dispatch({type: "API_CALL_REQUEST_POST", postId})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);