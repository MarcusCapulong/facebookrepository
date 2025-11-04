import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Shams Charania",
      content: "Luka MVP",
      image:
        "https://dims.apnews.com/dims4/default/27432e9/2147483647/strip/true/crop/3548x2365+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F61%2Fdf%2F7356f5641ea0092f3484148f6dfe%2F2924e9a7ef0f40c688fd60c3280778a2",
      createdAt: new Date().toLocaleString(),
    },
    {
      id: 2,
      author: "Shams Charania",
      content: "Twenty-six freethrows by Shai-Gilgeous-Alexander vs the nuggets.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQQQZFvltWPMy0b1P5oqExkhWYSOcoBOt_A&s",
      createdAt: new Date().toLocaleString(),
    },
  ]);

  const handlePost = (e) => {
    e.preventDefault();

    if (!author.trim() || !content.trim()) {
      alert("Please fill in both Author and Content!");
      return;
    }

    const newPost = {
      id: Date.now(),
      author,
      content,
      image,
      createdAt: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setAuthor("");
    setContent("");
    setImage("");
  };

  return (
    <div className="app">
      <h1>News Feed</h1>

      {/* Post Form */}
      <form className="form" onSubmit={handlePost}>
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
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      {/* Feed */}
      <div className="feed">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <p className="author">{post.author}</p>
            <p className="content">{post.content}</p>
            {post.image && <img src={post.image} alt="Post" />}
            <p className="timestamp">Created At: {post.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}