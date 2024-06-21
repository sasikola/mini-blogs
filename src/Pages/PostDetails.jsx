import React from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link } from "react-router-dom";
import thumbnail from "../images/blog22.jpg";
import { useSelector } from "react-redux";

function PostDetails() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <section className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-100 hover:shadow-2xl">
        <div className="post-detail-container">
          <div className="flex justify-between items-center mb-6">
            <PostAuthor />
            {userInfo?.token && (
              <div className="flex gap-4 items-center">
                <Link
                  to={`/posts/werer/edit`}
                  className="post-detail-button text-blue-500 hover:text-blue-700"
                >
                  Edit
                </Link>
                <Link
                  to={`/posts/werer/delete`}
                  className="post-detail-button text-red-500 hover:text-red-700"
                >
                  Delete
                </Link>
              </div>
            )}
          </div>
          <h1 className="text-2xl font-semibold mb-4">
            This is the post title
          </h1>
          <div className="post-detail-thumbnail mb-6">
            <img src={thumbnail} alt="" className="w-full h-auto rounded-lg" />
          </div>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            amet impedit dolorem eos ut libero eum perferendis error a incidunt
            quidem aut porro vitae sed illo, nemo beatae quos possimus!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            amet impedit dolorem eos ut libero eum perferendis error a incidunt
            quidem aut porro vitae sed illo, nemo beatae quos possimus!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            amet impedit dolorem eos ut libero eum perferendis error a incidunt
            quidem aut porro vitae se d illo, nemo beatae quos possimus! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            voluptates sequi, quas deserunt id eos quod voluptatibus quis ex,
            voluptatem magnam dolores alias explicabo officia quasi ullam culpa?
            Consequuntur, voluptate.
          </p>
        </div>
      </section>
    </>
  );
}

export default PostDetails;
