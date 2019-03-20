import React from 'react';
import { Button } from 'react-materialize'
const Comment = ({comment, removeComment}) => {
    return(
        <div>
            <p>{comment.content}</p>
            <p>By: {comment.author}</p>
            <Button onClick={() => removeComment(comment.id)}>Remove</Button>
        </div>
    )
}

export default Comment;