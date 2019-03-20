import React from 'react';
import { Button } from 'react-materialize'

const AddComment = props => {
    return (
        <div>
            <p>Add Comment:</p>
            <textarea type='text' onChange={(e) => props.newCommentTextHandler(e)} />
            <Button onClick={() => props.submitComment()}>Submit</Button>
        </div>
    )
}

export default AddComment