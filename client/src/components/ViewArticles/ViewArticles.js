import React from "react";
import { connect } from "react-redux";
import ArticleList from './ArticleList';
import styled from 'styled-components';


const Container = styled.div`
  text-align: center;
`

const ViewArticles = props => {
  return (
    <Container>
      <h4>Latest Articles</h4>
      <ArticleList articles={props.articleReducer.articles}/>
    </Container>
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
