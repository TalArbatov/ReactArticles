import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createArticle } from "../../actions/actionGenerators";
import { Link } from "react-router-dom";
import { Button, Input, Row } from "react-materialize";
import styled from 'styled-components'

const CreateArticle = props => {
  const [inputValue, onValueChange] = useState({
    title: "",
    content: ""
  });

  const textChangeHandler = (e, type) => {
    type === "title"
      ? onValueChange({
          title: e.target.value,
          content: inputValue.content
        })
      : onValueChange({
          title: inputValue.title,
          content: e.target.value
        });
  };

  const submitForm = () => {
    console.log(inputValue);
    props.createArticle(inputValue);
  };

  // const Container = styled.div`
  //   text-align:center;
  // `;

  return (
    <div>
      <h4>New Article</h4>
      <p>Please provid a valid title and content for your new article.</p>
      <Row>
        <Input
          type="text"
          label="title"
          value={inputValue.title}
          s={6}
          onChange={e => textChangeHandler(e, "title")}
        />
        </Row>
        <br />
        <Row>
        <Input
          label="Content"
          type="textarea"
          s={6}
          onChange={e => textChangeHandler(e, "content")}
        />
        </Row>
        <br />
        <Row>
        <Link to="/viewArticles">
          <Button onClick={() => submitForm(inputValue)}>Submit</Button>
        </Link>
        </Row>
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articleReducer: state.articleReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createArticle: article => dispatch(createArticle(article))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArticle);
