import React from 'react';

const AddComment = props => {
    return (
        <div>
            <p>Add Comment:</p>
            <textarea type='text' onChange={(e) => props.newCommentTextHandler(e)} />
            <button onClick={() => props.submitComment()}>Submit</button>
        </div>
    )
}

export default AddComment