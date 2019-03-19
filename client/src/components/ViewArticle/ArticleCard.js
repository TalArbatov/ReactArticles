import React from 'react';

export default ({article}) => {
    return(
        <div>
            <p>Title: {article.title}</p>
            <p>Author: {article.author}</p>
            <p>date created: {article.dateCreated}</p>
            <p>content: {article.content}</p>
        </div>
    )
}