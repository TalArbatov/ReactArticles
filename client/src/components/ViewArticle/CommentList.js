import React from 'react';
import Comment from './Comment' 

const CommentList = ({comments,removeComment}) => {
    return(
        <div>
            {comments.map((comment, key) => {
                return <Comment removeComment={removeComment} key={key} comment={comment}/>
            })}
        </div>
    )
}

export default CommentList;