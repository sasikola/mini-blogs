import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthors } from "../Redux/blogSlice";

function Authors() {
  const { authors } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  return (
    <section className="authors mt-6 mx-20">
      {authors && authors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {authors.map(({ _id, firstName, lastName, avatar, posts }) => (
            <Link
              to={`/posts/users/${_id}`}
              key={_id}
              className="bg-gray-700 p-6 rounded-3xl flex gap-8 transition-transform transform hover:scale-105 hover:bg-gray-800"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src={avatar}
                  alt={`${firstName} ${lastName}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="author-info">
                <h4 className="text-white text-xl font-bold">
                  {firstName} {lastName}
                </h4>
                <p className="text-gray-300 text-lg font-semibold">
                  {posts} {posts === 1 ? "Post" : "Posts"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <h2 className="text-2xl font-semibold text-gray-600">
            No Authors Found!
          </h2>
        </div>
      )}
    </section>
  );
}

export default Authors;
