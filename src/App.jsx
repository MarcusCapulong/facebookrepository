import React, { useState } from "react";
import "./App.css";

function App() {
  // State for form fields
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [posts, setPosts] = useState([]);

  // When the user clicks "Post"
  const handlePost = () => {
    // prevent empty author or content
    if (author.trim() === "" || content.trim() === "") {
      alert("Please fill in both Author and 'What's on your mind?'");
      return;
    }

    // create a new post object
    const newPost = {
      author,
      content,
      imageUrl,
      date: new Date().toLocaleString(),
    };

    // add it to the top of the posts list
    setPosts([newPost, ...posts]);

    // clear inputs
    setAuthor("");
    setContent("");
    setImageUrl("");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">News Feed</h1>

        {/* Input Form */}
        <div className="form">
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handlePost}>Post</button>
        </div>

        {/* Feed Section */}
        <div className="feed">
          {posts.length === 0 ? (
            <p className="no-posts">No posts yet. Be the first to share!</p>
          ) : (
            posts.map((post, index) => (
              <div className="post" key={index}>
                <h3>{post.author}</h3>
                <p className="content">{post.content}</p>
                {post.imageUrl && (
                  <img src={post.imageUrl} alt="Post" className="post-image" />
                )}
                <p className="date">Posted on: {post.date}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
