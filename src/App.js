import React from "react";

import NewPost from "./components/block/NewPost";
import PostList from "./components/block/Post/PostList";
import SearchPost from "./components/block/SearchPost";
import SortPost from "./components/block/SortPost";
import { usePosts } from "./hooks/usePosts";

import "./index.scss";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sort: "", search: "" });
  const sortAndSearchPosts = usePosts(posts, filter.sort, filter.search);

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
      <hr />
      <SearchPost filter={filter} setFilter={setFilter} />
      <SortPost filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortAndSearchPosts} title="List Posts #1" />
    </div>
  );
}

export default App;
