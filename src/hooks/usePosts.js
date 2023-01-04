import React from "react";

// sorted posts

export const useSortedPosts = (posts, sort) => {
  const selectSortPost = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [posts, sort]);

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
