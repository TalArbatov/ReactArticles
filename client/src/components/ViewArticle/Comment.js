import React from 'react';

const Comment = ({comment, removeComment}) => {
    return(
        <div>
            <p>{comment.content}</p>
            <p>By: {comment.author}</p>
            <button onClick={() => removeComment(comment.id)}>Remove</button>
        </div>
    )
}

export default Comment;