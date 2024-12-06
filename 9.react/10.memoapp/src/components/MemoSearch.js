import React from "react";

export const MemoSearch = ({ search }) => {
  const handleSearch = (e) => {
    search(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      className="search-bar"
      onChange={handleSearch}
    />
  );
};
