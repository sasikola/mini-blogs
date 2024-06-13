import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";

function PostAuthor() {
  return (
    <>
      <Link to={`/posts/users/afad`} className="flex gap-4 items-start">
        <div className="w-10 h-10 rounded-[29%] overflow-hidden">
          <img src={Avatar} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="author-details">
          <h5 className="text-base font-medium">By: Sasi Kiran</h5>
          <small className="text-gray-500">Just Now</small>
        </div>
      </Link>
    </>
  );
}

export default PostAuthor;
