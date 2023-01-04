export const pageCount = (totalCountPage, limitPosts) => {
  return Math.ceil(totalCountPage / limitPosts);
};
