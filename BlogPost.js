import React from 'react';
import './BlogPost.css';  // Import your blog post specific styles

function BlogPost({ title, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      {/* Add other post elements like date, author, comments, etc */}
    </article>
  );
}

export default BlogPost;