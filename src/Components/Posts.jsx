import React, { useEffect, useState } from "react";

import PostItem from "./PostItem";

import { dummyPosts } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../Redux/blogSlice";

function Posts() {
  const [posts, setPosts] = useState(dummyPosts);
  const { blogList } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);
 

  return (
    <>
      <section className="posts mt-6">
        {blogList && blogList.length > 0 ? (
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {blogList &&
              blogList.map(
                ({ id, images, category, title, description, author }) => (
                  <div
                    key={id}
                    className="bg-white rounded-lg p-8 shadow-lg transition-all duration-200 ease-in-out cursor-pointer relative overflow-hidden w-full h-full hover:shadow-2xl"
                  >
                    <PostItem
                      thumbnail={images}
                      category={category}
                      title={title}
                      description={description}
                      author={author}
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

export default Posts;
