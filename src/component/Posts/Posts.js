import React from "react";
import { useSelector } from "react-redux";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";

const Posts = () => {
  const allPosts = useSelector((state) => state.allPosts.allPosts);
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <CreatePost />
      </div>
      <div className=" flex flex-wrap justify-center bg-green-500">
        {allPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
