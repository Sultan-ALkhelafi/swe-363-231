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


const CustomEmitter = require('./customEmitter');
const emitter = new CustomEmitter();

// Function to generate a random number between min and max seconds
const randomSeconds = (min, max) => Math.random() * (max - min) + min;

// Handle 'userLoggedIn' event
emitter.on('userLoggedIn', (user) => {
    console.log(`${new Date().toISOString()}: ${user} logged in`);
});

// Simulate user login at random intervals
let userCount = 0;
const simulateUserLogin = () => {
    const user = `USER_${++userCount}`;
    emitter.emit('userLoggedIn', user);

    // Schedule the next user login
    setTimeout(simulateUserLogin, randomSeconds(100, 2000)); // 0.1 to 2 seconds
};

// Start the simulation
simulateUserLogin();


export default App;
