import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDeletePost } from "../../../store/post/postAction";
const Post = ({ post }) => {
  const dispatch = useDispatch();
  const deletePost = (id) => {
    dispatch(fetchDeletePost(id));
  };
  return (
    <div className="post overflow-hidden shadow-lg bg-white rounded-lg relative m-4 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <div className="post-banner">
        <img
          className=" absolute h-56 w-full object-cover"
          src={`https://picsum.photos/id/${post.id}/500/500`}
          alt=""
        />
      </div>
      <div className=" mt-60 mb-6 mx-6 py-2">
        <h2 className=" leading-6 text-xl font-semibold">{post.title}</h2>
        <p className=" text-sm mt-4 mx-0 mb-4">{post.body}</p>
        <div className="absolute bottom-0 py-2">
          <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-md text-white px-4 py-2 xs:mr-2">
            <Link to={`/posts/${post.id}`}>See More...</Link>
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md text-white px-4 py-2 sm:ml-24 "
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
