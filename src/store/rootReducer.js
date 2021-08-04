import { combineReducers } from "redux";
import postReducer from "./post/postReducer";

const rootReducer = combineReducers({
  allPosts: postReducer,
});
export default rootReducer;
