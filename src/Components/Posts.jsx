import React, { useState } from "react";
import thumbnail1 from "../images/blog1.jpg";
import thumbnail2 from "../images/blog2.jpg";
import thumbnail3 from "../images/blog3.jpg";
import thumbnail4 from "../images/blog4.jpg";
import PostItem from "./PostItem";

const dummyPosts = [
  {
    id: "1",
    thumbnail: thumbnail1,
    title: "Post 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "education",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: thumbnail2,
    title: "Post 2",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    category: "technology",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: thumbnail3,
    title: "Post 3",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
    category: "lifestyle",
    authorID: 2,
  },
  {
    id: "4",
    thumbnail: thumbnail4,
    title: "Post 4",
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will.",
    category: "health",
    authorID: 4,
  },
];

function Posts() {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <>
      <section className="posts mt-6">
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
      </section>
    </>
  );
}

export default Posts;
