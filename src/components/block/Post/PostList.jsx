import React from "react";

import PostItem from "./index";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1>No Posts!</h1>;
  }

  return (
    <>
      <h1>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
