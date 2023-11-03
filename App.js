import React from 'react';
import Header from './Header';
import BlogPost from './BlogPost';
import './App.css';  // Main styles, possibly your existing style.css

function App() {
  // Placeholder data - in a real app, this might come from an API or your state
  const posts = [
    { title: 'First Post', content: 'This is the first post content.' },
    { title: 'Second Post', content: 'This is the second post content.' },
    // ...add as many posts as you have
  ];

  return (
    <div className="App">
      <Header />
      {posts.map(post => (
        <BlogPost key={post.title} title={post.title} content={post.content} />
      ))}
      {/* Insert other components like Footer, etc, here */}
    </div>
  );
}

export default App;
