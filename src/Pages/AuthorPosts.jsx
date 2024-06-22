import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostItem from "../Components/PostItem";
import { fetchAllBlogs } from "../Redux/blogSlice";

function AuthorPosts() {
  const { id: authorId } = useParams();
  const { blogList } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);

  const filteredPosts = blogList?.filter(
    (post) => post.author._id === authorId
  );

 

  return (
    <section className="posts mt-6">
      {filteredPosts && filteredPosts.length > 0 ? (
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredPosts &&
            filteredPosts.map(
              ({ id, images, category, title, description, author, createdAt }) => (
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
                    createdAt={createdAt}
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
  );
}

export default AuthorPosts;
