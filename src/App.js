import React from "react";

import NewPost from "./components/block/NewPost";
import PostList from "./components/block/Post/PostList";
import SearchPost from "./components/block/SearchPost";
import SortPost from "./components/block/SortPost";

import PostService from "./API/PostService";
import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";
import { pageCount } from "./utils/pages";

import "./index.scss";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState({ sort: "", search: "" });
  const [totalPages, setTotalPages] = React.useState(0);
  const [limitPosts, setLimitPosts] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const sortAndSearchPosts = usePosts(posts, filter.sort, filter.search);

  // -----------------------------------------------------------------

  const [fetchPosts, loading, error] = useFetching(async () => {
    const res = await PostService.getAllPost(limitPosts, page);
    setPosts(res.data);
    const totalCountPage = res.headers["x-total-count"];
    setTotalPages(pageCount(totalCountPage, limitPosts));
  });

  console.log(totalPages);

  React.useEffect(() => {
    fetchPosts();
  }, []);

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
      {loading ? <h1>Loading...</h1> : <PostList remove={removePost} posts={sortAndSearchPosts} title="List Posts #1" />}
    </div>
  );
}

export default App;
