import React from 'react';
import { Link } from 'react-router-dom';

const ArticleLink = ({article}) => {
    let commentsString = '';
    const commentsNum = article.comments.length;
    if(commentsNum == 0)
        commentsString = 'No Comments Yet.';
    else if(commentsNum == 1)
        commentsString = '1 Comment';
    else
        commentsString = `${commentsNum} Comments`;
    if(article)
    return(
        <div>
            <Link to={`/article/${article.id}`}><p>{article.id}. {article.title}</p></Link>
            <p>{commentsString}</p>
        </div>
    )
}

export default ArticleLink