import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createArticle } from "../../actions/actionGenerators";
import { Link } from 'react-router-dom'
import {Button} from 'react-materialize';

const CreateArticle = props => {
  const [inputValue, onValueChange] = useState({
      title: '',
      content: '',
  });

  const textChangeHandler = (e, type) => {
    type === 'title' ?
    onValueChange({
        title: e.target.value,
        content: inputValue.content
    }):
    onValueChange({
        title: inputValue.title,
        content: e.target.value
    })
  };

  const submitForm = () => {
      console.log(inputValue);
      props.createArticle(inputValue)
  }

  return (
    <div>
      <h1>Create Article</h1>
      <p>title: </p>
      <input
        type="text"
        value={inputValue.title}
        onChange = {e => textChangeHandler(e, 'title')}
      />
      <p>content:</p>
      <textarea onChange={e => textChangeHandler(e, 'content')}></textarea>
      <Link to='/viewArticles'><Button onClick={() => submitForm(inputValue)}>Submit</Button></Link>
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
