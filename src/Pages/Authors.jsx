import React, { useState } from "react";
import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Avatar4 from "../images/avatar4.jpg";
import Avatar5 from "../images/avatar5.jpg";
import { Link } from "react-router-dom";
const authorsData = [
  {
    id: 1,
    name: "Author1",
    avatar: Avatar1,
    posts: 1,
  },
  {
    id: 2,
    name: "Author2",
    avatar: Avatar2,
    posts: 3,
  },
  {
    id: 1,
    name: "Author3",
    avatar: Avatar3,
    posts: 3,
  },
  {
    id: 1,
    name: "Avatar4",
    avatar: Avatar4,
    posts: 3,
  },
  {
    id: 1,
    name: "Author5",
    avatar: Avatar5,
    posts: 3,
  },
];
function Authors() {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <>
      <section className="authors mt-6 mx-20">
        {authors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {authors.map(({ id, name, avatar, posts }) => (
              <Link
                to={`/posts/users/${id}`}
                key={id}
                className="bg-gray-700 p-6 rounded-3xl flex gap-8 transition-transform transform hover:scale-105 hover:bg-gray-800"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="author-info">
                  <h4 className="text-white text-xl font-bold">{name}</h4>
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
    </>
  );
}

export default Authors;
