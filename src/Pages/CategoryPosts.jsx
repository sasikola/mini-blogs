import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlogs } from "../Redux/blogSlice";
import PostItem from "../Components/PostItem";

function CategoryPosts() {
  const { categories } = useParams();
  const { blogList } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);
  console.log(categories);

  const filteredPosts = blogList?.filter(
    (post) => post.category === categories
  );

  return (
    <>
      <section className="posts mt-6">
        {filteredPosts && filteredPosts.length > 0 ? (
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredPosts.map(
              ({
                _id,
                images,
                category,
                title,
                description,
                author,
                createdAt,
              }) => (
                <div
                  key={_id}
                  className="bg-white rounded-lg p-8 shadow-lg transition-all duration-200 ease-in-out cursor-pointer relative overflow-hidden w-full h-full hover:shadow-2xl"
                >
                  <PostItem
                    thumbnail={images}
                    category={category}
                    title={title}
                    description={description}
                    author={author}
                    postId={_id}
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
    </>
  );
}

export default CategoryPosts;
