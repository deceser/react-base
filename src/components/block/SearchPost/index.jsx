import React from "react";

import InputUi from "../../UI/InputUi";

const SearchPost = ({ filter, setFilter }) => {
  return (
    <div>
      <InputUi placeholder="Search..." value={filter.search} onChange={(e) => setFilter({ ...filter, search: e.target.value })} />
    </div>
  );
};

export default SearchPost;
