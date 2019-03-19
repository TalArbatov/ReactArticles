import React from "react";
import { connect } from "react-redux";
import ArticleLink from "./ArticleLink";

const ViewArticles = props => {
  return (
    <div>
      <h1>View Articles</h1>
      {props.articleReducer.articles.map((ar, key) => {
        return <ArticleLink article={ar}/>;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articleReducer: state.articleReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewArticles);
