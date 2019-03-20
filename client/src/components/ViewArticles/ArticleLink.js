import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Row } from "react-materialize";

const ArticleLink = ({ article }) => {
  let commentsString = "";
  const commentsNum = article.comments.length;
  if (commentsNum == 0) commentsString = "No Comments Yet.";
  else if (commentsNum == 1) commentsString = "1 Comment";
  else commentsString = `${commentsNum} Comments`;
  if (article)
    return (
      <div>
          <Col m={3} s={3}>
            <Card
              m={3} s={3}
              className="blue-grey darken-1 center-align .center-align"
              textClassName="white-text"
              title={article.title}
              actions={[
                <Link to={`/article/${article.id}`}>{commentsString}</Link>
              ]}
            >
              {article.content.slice(0, 20) + '...'}
            </Card>
          </Col>
        {/* <Link to={`/article/${article.id}`}>
          <p>
            {article.id}. {article.title}
          </p>
        </Link>
        <p>{commentsString}</p> */}
      </div>
    );
};

export default ArticleLink;
