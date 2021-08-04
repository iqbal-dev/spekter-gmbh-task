import axios from "axios";
import {
  CREATE_POST,
  GET_ALL_POSTS,
  GET_POST,
  POST_DELETE,
} from "./postTypeAction";

function getAllPosts(posts) {
  return {
    type: GET_ALL_POSTS,
    payload: posts,
  };
}
function getPost(post) {
  return {
    type: GET_POST,
    payload: post,
  };
}
function deletePost(post) {
  return {
    type: POST_DELETE,
    payload: post,
  };
}
function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}
export const fetchAllPosts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      dispatch(getAllPosts(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchPost = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(getPost(res.data));
    } catch (error) {}
  };
};
export const fetchDeletePost = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(deletePost(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchCreatePost = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        data
      );
      dispatch(createPost(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
