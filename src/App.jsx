import React, { useContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostsListProvider, { PostsListContext } from "./store/posts-list-store";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("create-post");

  return (
    <PostsListProvider>
      <Content selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </PostsListProvider>
  );
};

const Content = ({ selectedTab, setSelectedTab }) => {
  const { postList } = useContext(PostsListContext);
  const postListLength = postList.length;
  document.title = `FaceBook Clone (${postListLength})`;
  return (
    <>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
