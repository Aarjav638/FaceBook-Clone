import React, { useContext } from "react";
import PostCard from "./PostCard";
import { PostsListContext } from "../store/posts-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, deletePost } = useContext(PostsListContext);

  return (
    <div className="postGrid">
      {postList.length == 0 && <Welcome />}
      {postList.map((item) => {
        return <PostCard key={item.id} post={item} deletePost={deletePost} />;
      })}
    </div>
  );
};

export default PostList;
