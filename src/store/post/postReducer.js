import {
  CREATE_POST,
  GET_ALL_POSTS,
  GET_POST,
  POST_DELETE,
} from "./postTypeAction";

const initialState = {
  allPosts: [],
  post: {},
  deletePost: {},
  isLoading: true,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        isLoading: false,
        allPosts: action.payload,
      };
    case CREATE_POST:
      return {
        isLoading: false,
        allPosts: [...state.allPosts, action.payload],
      };
    case GET_POST:
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };
    case POST_DELETE:
      return {
        isLoading: false,
        allPosts: state.allPosts.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
};

export default postReducer;
