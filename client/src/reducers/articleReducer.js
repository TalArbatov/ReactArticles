import { ADD_ARTICLE, REMOVE_ARTICLE } from "../actions/actionTypes";

const defaultState = {
  articles: []
};

if (localStorage.state != null) defaultState = JSON.parse(localStorage.state);

const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      localStorage.state = JSON.stringify({
        ...state,
        articles: [...state, articles, action.article]
      });
      return { ...state, articles: [...state, articles, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
