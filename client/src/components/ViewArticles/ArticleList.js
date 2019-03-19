import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLink from "./ArticleLink";

const ArticleList = ({ articles }) => {
    return (
        <div>
            {articles.map((ar, key) => {
                return <ArticleLink key={key} article={ar} />;
            })}
        </div>
    )
}

export default ArticleList