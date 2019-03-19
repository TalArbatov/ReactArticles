import React from 'react';
import { Link } from 'react-router-dom';

const ArticleLink = ({article}) => {
    return(
        <div>
            <Link to={`/article/${article.id}`}><p>{article.id}. {article.title}</p></Link>
        </div>
    )
}

export default ArticleLink