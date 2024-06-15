import React, { useState } from "react";
import { dummyPosts } from "../data";
import PostItem from "../Components/PostItem";

function AuthorPosts() {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <>
      <section className="posts mt-6 md:ml-20 md:mr-20">
        {posts.length > 0 ? (
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {posts.map(
              ({ id, thumbnail, category, title, description, authorID }) => (
                <div
                  key={id}
                  className="bg-white rounded-lg p-8 shadow-lg transition-all duration-200 ease-in-out cursor-pointer relative overflow-hidden w-full h-full hover:shadow-2xl"
                >
                  <PostItem
                    thumbnail={thumbnail}
                    category={category}
                    title={title}
                    description={description}
                    authorID={authorID}
                    postId={id}
                  />
                </div>
              )
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <h2 className="text-2xl font-semibold text-gray-600">
              No Posts Found!
            </h2>
          </div>
        )}
      </section>
    </>
  );
}

export default AuthorPosts;
