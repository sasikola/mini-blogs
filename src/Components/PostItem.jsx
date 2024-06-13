import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

function PostItem({
  postId,
  category,
  title,
  description,
  authorID,
  thumbnail,
}) {
  const shortDescription =
    description.length > 145
      ? description.substring(0, 145) + "..."
      : description;
  const postTitle = title.length > 30 ? title.substring(0, 30) + "..." : title;

  return (
    <>
      <article className="transition-all duration-200 ease-in-out cursor-pointer relative overflow-hidden w-full h-full">
        <div className="h-64 overflow-hidden">
          <img src={thumbnail} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="mt-6">
          <Link to={`/posts/${postId}`}>
            <h3 className="mt-4 mb-2.5 text-xl font-semibold">{postTitle}</h3>
          </Link>
          <p className="text-gray-700">{shortDescription}</p>
          <div className="flex justify-between items-end mt-8">
            <PostAuthor />
            <Link
              to={`/posts/categories/${category}`}
              className="inline-block px-2 py-1 mt-4 text-blue-500 rounded transition duration-200 ease-in-out hover:text-white hover:bg-blue-500"
            >
              {category}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default PostItem;
