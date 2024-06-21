import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";

function PostAuthor({ author, id }) {
  return (
    <>
      <Link to={`/posts/users/${id}`}className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-[29%] overflow-hidden">
          <img
            src={Avatar}
            alt="Author avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="author-details">
          <h5 className="text-base font-medium">By: {author}</h5>
          <small className="text-gray-500">Just Now</small>
        </div>
      </Link>
    </>
  );
}

export default PostAuthor;
