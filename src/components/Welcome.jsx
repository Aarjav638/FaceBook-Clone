import React from "react";
import { useContext } from "react";
import { PostsListContext } from "../store/posts-list-store";
const Welcome = () => {
  const { addPosts } = useContext(PostsListContext);
  const handlePost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addPosts(data.posts);
      });
  };
  return (
    <div>
      <h1>Welcome to Facebook Clone</h1>
      <p>
        This is a simple clone of Facebook where you can create posts and view
        them. You can also delete the posts. This is a simple project to
        understand the basics of React.
      </p>

      <button className="btn btn-primary" onClick={handlePost}>
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
