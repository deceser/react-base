import React from "react";

import InputUi from "../../UI/InputUi";
import ButtonUi from "../../UI/ButtonUi";

const NewPost = ({ create }) => {
  const [createPost, setCreatePost] = React.useState({ title: "", content: "" });

  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...createPost,
      id: Date.now(),
    };
    create(newPost);
    setCreatePost({ title: "", content: "" });
  };

  return (
    <div>
      <form>
        <InputUi
          type="text"
          placeholder="Title post"
          value={createPost.title}
          onChange={(e) => setCreatePost({ ...createPost, title: e.target.value })}
        />
        <InputUi
          type="text"
          placeholder="Description post"
          value={createPost.content}
          onChange={(e) => setCreatePost({ ...createPost, content: e.target.value })}
        />
        <ButtonUi onClick={addPost}>Create Post</ButtonUi>
      </form>
    </div>
  );
};

export default NewPost;
