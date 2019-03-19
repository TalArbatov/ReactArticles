import { ADD_ARTICLE, REMOVE_ARTICLE } from "../actions/actionTypes";

let defaultState = {
  articles: []
};

const author = "Tal Arbatov";

if (localStorage.state != null) defaultState = JSON.parse(localStorage.state);

const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      const article = {
        ...action.article,
        author: author,
        dateCreated: Date.now(),
        id: state.articles.length + 1
      };
      localStorage.state = JSON.stringify({
        ...state,
        articles: [...state.articles, article]
      });
      return { ...state, articles: [...state.articles, article] };
    case REMOVE_ARTICLE:
      const newArticles = state.articles.filter(ar => {
        return ar.id != action.id
      });
      localStorage.state = JSON.stringify({...state, articles: newArticles});
      return {...state, articles: newArticles};
    default:
      return state;
  }
};

export default articleReducer;
