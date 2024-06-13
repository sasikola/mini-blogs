import React from 'react'
import PostAuthor from '../Components/PostAuthor'

function PostDetails() {
  return (
    <>
    <section className='post-detail'>
      <div className='container post-detail-container'>
        <div className='post-detail-header'>
          <PostAuthor/>
        </div>
      </div>
    </section>
    </>
  )
}

export default PostDetails