import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchCreatePost } from "../../../store/post/postAction";

const CreatePost = () => {
  const [file, setFile] = useState([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("file", data.file);
    reset();
    dispatch(fetchCreatePost(formData));
  };

  return (
    <div className="bg-gray-300 w-96 rounded-lg p-4">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true })}
          className="w-full my-2 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="text"
          placeholder="Title"
        />
        <p className="text-red-500">
          {errors.title?.type === "required" && "Title is required"}
        </p>

        <input
          className="w-full px-3 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="text"
          {...register("body", { required: true })}
          placeholder="Body"
        />
        <p className="text-red-500">
          {errors.body?.type === "required" && "Body is required"}
        </p>

        {file[0] && (
          <img
            className="h-40 w-48"
            src={URL.createObjectURL(file[0])}
            alt=""
          />
        )}
        <input
          className="w-full px-3 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="file"
          {...register("file", { required: true })}
          onChange={(e) => setFile(e.target.files)}
          // value={formData.file}
          placeholder="Body"
        />
        <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-md text-white px-4 py-2 my-0 mr-auto">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
