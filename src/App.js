import React from "react";

import NewPost from "./components/block/NewPost";
import PostList from "./components/block/Post/PostList";
import SearchPost from "./components/block/SearchPost";
import SortPost from "./components/block/SortPost";

import "./index.scss";

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "bReact", content: "cText content" },
    { id: 2, title: "cReact", content: "bText content" },
    { id: 3, title: "aReact", content: "aText content" },
  ]);

  const [filter, setFilter] = React.useState({ sort: "", search: "" });

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

  // sort select post

  const selectSortPost = React.useMemo(() => {
    console.log("check func");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  // -----------------------------------------------------------------

  // search input post

  const sortandsearch = React.useMemo(() => {
    return selectSortPost.filter((post) => post.title.toLowerCase().includes(filter.search));
  }, [filter.search, selectSortPost]);

  // -----------------------------------------------------------------

  return (
    <div className="App">
      <NewPost create={createPost} />
      <hr />
      <SearchPost filter={filter} setFilter={setFilter} />
      <SortPost filter={filter} setFilter={setFilter} />
      {sortandsearch.length ? <PostList remove={removePost} posts={sortandsearch} title="List Posts #1" /> : <h1>No Posts!</h1>}
    </div>
  );
}

export default App;
