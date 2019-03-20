import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLink from "./ArticleLink";
import {Row} from 'react-materialize'
const ArticleList = ({ articles }) => {
    return (
        <div>
            <Row>
            {articles.map((ar, key) => {
                return <ArticleLink key={key} article={ar} />;
            })}
            </Row>
        </div>
    )
}

export default ArticleList