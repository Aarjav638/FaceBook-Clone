import { createContext, useReducer } from "react";
const initialState = {
  postList: [],
  addPost: () => {},
  addPosts: () => {},
  deletePost: () => {},
};
export const PostsListContext = createContext(initialState);
const postListReducer = (state, action) => {
  let newPostList = state;
  switch (action.type) {
    case "ADD_POST":
      console.log(action.payload.post);
      newPostList = [...state, action.payload.post];

      console.log(newPostList);
      break;
    case "ADD_POSTS":
      console.log(action.payload.post);
      newPostList = action.payload.post;

      console.log(newPostList);
      break;
    case "DELETE_POST":
      newPostList = state.filter((post) => post.id !== action.payload.postId);

      break;
  }
  localStorage.setItem("postList", JSON.stringify(newPostList));
  return newPostList;
};
const PostsListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_post_list
  );
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };
  const addPosts = (post) => {
    dispatchPostList({
      type: "ADD_POSTS",
      payload: {
        post,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostsListContext.Provider
      value={{
        postList,
        addPost,
        addPosts,
        deletePost,
      }}
    >
      {children}
    </PostsListContext.Provider>
  );
};
const default_post_list = JSON.parse(localStorage.getItem("postList")) || [
  {
    id: "1",
    title: "Post 1",
    content: "This is Post 1",
    reactions: 16,
    userid: "user1",
    tags: ["vaction", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Post 2",
    content: "This is Post 2",
    reactions: 20,
    userid: "user2",
    tags: ["vaction", "Mumbai", "Enjoying"],
  },
];
export default PostsListProvider;
