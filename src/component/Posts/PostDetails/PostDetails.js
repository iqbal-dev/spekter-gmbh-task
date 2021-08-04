import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../../store/post/postAction";

const PostDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => state.allPosts.post);
  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);
  console.log(post);
  return (
    <>
      <div className="w-full h-14 flex flex-col-reverse justify-center align-center rounded-lg bg-green-400 mb-8">
        <p className="text-center text-2xl text-white text-bold font-bold">
          Post Details
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 xs:grid-cols-1 xs:flex-row-reverse">
        <div>
          <h1 className="text-5xl text-center text-white font-bold mb-6">
            {post.title}
          </h1>
          <p className="text-center text-white">{post.body}</p>
        </div>
        <div className="my-0 mx-auto ">
          <img
            className="rounded-lg w-96"
            src={`https://picsum.photos/id/${post.id}/500/500`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PostDetails;
