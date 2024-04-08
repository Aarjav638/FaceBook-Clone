import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostsListProvider from "./store/posts-list-store";
const App = () => {
  const [selectedTab, setSelectedTab] = useState("create-post");

  return (
    <PostsListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostsListProvider>
  );
};

export default App;
