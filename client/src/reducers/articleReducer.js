import axios from 'axios'

import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/actionTypes";

let defaultState = {
  articles: []
};

const author = "Tal Arbatov";

if (localStorage.articleReducer != null)
  defaultState = JSON.parse(localStorage.articleReducer);

const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      const article = {
        ...action.article,
        author: author,
        dateCreated: Date.now(),
        id: state.articles.length + 1,
        comments: []
      };

      axios.post('/api/createArticle', article, (res) => {
        console.log(res);
      })

      localStorage.articleReducer = JSON.stringify({
        ...state,
        articles: [...state.articles, article]
      });
      return { ...state, articles: [...state.articles, article] };
    case REMOVE_ARTICLE:
      const newArticles = state.articles.filter(ar => {
        return ar.id != action.id;
      });
      localStorage.articleReducer = JSON.stringify({
        ...state,
        articles: newArticles
      });
      return { ...state, articles: newArticles };
    case ADD_COMMENT:
      //find targetArticleIndex
      const targetArticleIndex = state.articles.findIndex(ar => {
        return ar.id == action.comment.articleID;
      });
      console.log("targetArticleIndex");
      console.log(targetArticleIndex);
      const targetArticle = { ...state.articles[targetArticleIndex] };
      console.log("targetArticle");
      console.log(targetArticle);
      //create comment
      const comment = {
        id: targetArticle.comments.length + 1,
        articleID: action.comment.articleID,
        author: author,
        dateCreated: Date.now(),
        content: action.comment.content
      };
      //push comment to target article
      targetArticle.comments.push(comment);

      const newArticles2 = [
        ...state.articles.slice(0, targetArticleIndex),
        targetArticle,
        ...state.articles.slice(targetArticleIndex + 1)
      ];

      console.log("newArticles2");
      console.log(newArticles2);

      localStorage.articleReducer = JSON.stringify({
        ...state,
        articles: newArticles2
      });
      return { ...state, articles: newArticles2 };
    case REMOVE_COMMENT:
      const targetArticleIndex2 = state.articles.findIndex(ar => {
        return ar.id == action.comment.articleID;
      });
      console.log("targetArticleIndex2");
      console.log(targetArticleIndex2);

      const targetArticle2 = { ...state.articles[targetArticleIndex2] };
      console.log("targetArticle2");
      console.log(targetArticle2);

      const newComments = targetArticle2.comments.filter(comment => {
        return comment.id != action.comment.id;
      });
      targetArticle2.comments = newComments;
      const newArticles3 = [
        ...state.articles.slice(0, targetArticleIndex2),
        targetArticle2,
        ...state.articles.slice(targetArticleIndex2 + 1)
      ];
      localStorage.articleReducer = JSON.stringify({
        ...state,
        articles: newArticles3
      });
      return { ...state, articles: newArticles3 };
    default:
      return state;
  }
};

export default articleReducer;
