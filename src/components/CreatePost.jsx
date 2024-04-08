import React, { useRef, useState } from "react";
import { useContext } from "react";
import { PostsListContext } from "../store/posts-list-store";
const CreatePost = () => {
  let userid = useRef();
  let title = useRef();
  // let image = useRef();
  let content = useRef();
  let reactions = useRef();
  let tags = useRef();
  // const [selectedImage, setSelectedImage] = useState(null);
  // const handleImageChange = async (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     setSelectedImage(URL.createObjectURL(img));
  //   }
  // };
  const { addPost } = useContext(PostsListContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    addPost({
      id: Math.random().toString(),
      title: title.current.value,
      // image: selectedImage,
      content: content.current.value,
      reactions: reactions.current.value,
      tags: tags.current.value.split(" "),
      userid: userid.current.value,
    });
    userid.current.value = "";
    title.current.value = "";
    // image.current.value = "";
    content.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input
                ref={title}
                type="text"
                className="form-control"
                id="Title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Content" className="form-label">
                Content
              </label>
              <textarea
                ref={content}
                type="text"
                rows={4}
                className="form-control"
                id="Content"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label htmlFor="reactions" className="form-label">
              Reaction
            </label>
            <input
              ref={reactions}
              type="text"
              className="form-control"
              id="reactions"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="UserId" className="form-label">
              User Id
            </label>
            <input
              ref={userid}
              type="text"
              className="form-control"
              id="Userid"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Tags" className="form-label">
              Tags
            </label>
            <input ref={tags} type="text" className="form-control" id="Tags" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
