import React from "react";
import NewPost from "./components/block/NewPost";

import PostList from "./components/block/Post/PostList";
import ButtonUi from "./components/UI/ButtonUi";
import InputUi from "./components/UI/InputUi";

import "./index.scss";

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "React", content: "Text content" },
    { id: 2, title: "React", content: "Text content" },
    { id: 3, title: "React", content: "Text content" },
  ]);

  // -----------------------------------------------------------------

  // callback func add new post create

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // -----------------------------------------------------------------

  // callback func remove post

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // -----------------------------------------------------------------

  return (
    <div className="App">
      <NewPost create={createPost} />
      {posts.length ? <PostList remove={removePost} posts={posts} title="List Posts #1" /> : <h1>No Posts!</h1>}
    </div>
  );
}

export default App;
