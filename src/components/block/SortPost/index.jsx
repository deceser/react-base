import React from "react";

import SelectUi from "../../UI/SelectUi";

const SortPost = ({ filter, setFilter }) => {
  return (
    <div>
      <SelectUi
        value={filter.sort}
        onChange={(sortSelect) => setFilter({ ...filter, sort: sortSelect })}
        defaultvalue="Sort"
        options={[
          { value: "title", name: "Sort title" },
          { value: "body", name: "Sort description" },
        ]}
      />
    </div>
  );
};

export default SortPost;
