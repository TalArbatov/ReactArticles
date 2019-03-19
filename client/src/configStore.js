import { createStore, combineReducers } from "redux";
import articleReducer from "./reducers/articleReducer";

const configStore = () =>
  createStore(
    combineReducers({
      articleReducer
    })
  );

export default configStore;


