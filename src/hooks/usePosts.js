import React from "react";

// custom hooks

// sorted posts

export const useSortedPosts = (posts, sort) => {
  const selectSortPost = React.useMemo(() => {
    console.log("check func");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return selectSortPost;
};

// -----------------------------------------------------------------

// sorted and search posts

export const usePosts = (posts, sort, search) => {
  const selectSortPost = useSortedPosts(posts, sort);
  const sortAndSearch = React.useMemo(() => {
    return selectSortPost.filter((post) => post.title.toLowerCase().includes(search));
  }, [search, selectSortPost]);

  return sortAndSearch;
};
