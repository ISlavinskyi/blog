import React  from 'react';

import Comment from './Comment/Coment';

const Comments = (props) =>{

        const comments = props.comments.map((comment, index) => <Comment
            index={index+1}
            key={comment.id}
            name={comment.name}
            body={comment.body}
        />);
        return(
            <div>{comments}</div>
        );


}

export default Comments;