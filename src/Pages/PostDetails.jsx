import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "../Components/PostAuthor";
import { fetchSingleBlog } from "../Redux/blogSlice";
import thumbnail from "../images/blog22.jpg";

function PostDetails() {
  const { userInfo } = useSelector((state) => state.auth);
  const { blog, loading, error } = useSelector((state) => state.blog);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  }, [dispatch, id]);

  useEffect(() => {}, [blog, loading, error]);

  return (
    <section className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-100 hover:shadow-2xl">
      <div className="post-detail-container">
        <div className="flex justify-between items-center mb-6">
          {blog && (
            <PostAuthor
              thumbnail={blog?.images}
              category={blog?.category}
              title={blog?.title}
              description={blog?.description}
              author={blog?.author}
              postId={id}
              createdAt={blog?.createdAt}
            />
          )}

          {userInfo?.token && (
            <div className="flex gap-4 items-center">
              <Link
                to={`/posts/${id}/edit`}
                className="post-detail-button text-blue-500 hover:text-blue-700"
              >
                Edit
              </Link>
              <Link
                to={`/posts/${id}/delete`}
                className="post-detail-button text-red-500 hover:text-red-700"
              >
                Delete
              </Link>
            </div>
          )}
        </div>
        {loading && <p>Loading...</p>}
        {blog && (
          <div>
            <h1 className="text-2xl font-semibold mb-4">{blog.title}</h1>
            <div className="post-detail-thumbnail mb-6">
              <img
                src={blog.thumbnail || thumbnail}
                alt={blog.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-700 leading-relaxed">{blog.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PostDetails;
