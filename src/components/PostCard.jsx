import React from "react";
import { MdDeleteForever } from "react-icons/md";
const PostCard = ({ post, deletePost }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger "
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteForever />
          </span>
        </h5>
        <p className="card-text">{post.content}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary mx-1">
            {" "}
            #{tag}{" "}
          </span>
        ))}
        <div className="alert alert-success my-2" role="alert">
          {post.reactions} Reactions
        </div>
      </div>
    </div>
  );
};

export default PostCard;
