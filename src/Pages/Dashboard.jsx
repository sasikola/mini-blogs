import React, { useState } from "react";
import { dummyPosts } from "../data";
import { Link } from "react-router-dom";

function Dashboard() {
  const [post, setPost] = useState(dummyPosts);
  return (
    <>
      <section className="dashboard">
        {post.length ? (
          <div className="container mx-auto px-4">
            <ul className="divide-y divide-gray-200">
              {post.map((post) => (
                <li key={post.id} className="py-4 flex">
                  <div className="flex-shrink-0">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4 md:flex-1">
                    <h5 className="text-xl font-semibold text-gray-800">
                      {post.title}
                    </h5>
                    <div className="mt-2 space-y-2 sm:space-y-0 sm:space-x-4 flex sm:justify-end">
                      <Link
                        to={`/posts/${post.id}`}
                        className="block w-full sm:w-auto text-center sm:text-right text-blue-500 hover:text-blue-700 md:bg-blue-500 hover:bg-blue-700 md:text-white font-semibold py-2 px-4 rounded-md transition duration-300 mt-2 sm:mt-0"
                      >
                        View
                      </Link>
                      <Link
                        to={`/posts/${post.id}/edit`}
                        className="block w-full sm:w-auto text-center sm:text-right text-yellow-500 hover:text-yellow-700 md:bg-yellow-500 hover:bg-yellow-700 md:text-white font-semibold py-2 px-4 rounded-md transition duration-300 mt-2 sm:mt-0"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/posts/${post.id}/delete`}
                        className="block w-full sm:w-auto text-center sm:text-right text-red-500 hover:text-red-700 md:bg-red-500 hover:bg-red-700 md:text-white font-semibold py-2 px-4 rounded-md transition duration-300 mt-2 sm:mt-0"
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <h2 className="text-2xl font-semibold text-gray-600">
              You have no posts yet.
            </h2>
          </div>
        )}
      </section>
    </>
  );
}

export default Dashboard;
