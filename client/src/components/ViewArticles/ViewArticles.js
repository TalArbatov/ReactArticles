import React from "react";
import { connect } from "react-redux";
import ArticleList from './ArticleList';

const ViewArticles = props => {
  return (
    <div>
      <h1>View Articles</h1>
      <ArticleList articles={props.articleReducer.articles}/>
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
