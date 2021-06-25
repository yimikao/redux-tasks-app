import React from "react";

export default function SearchTasks({ handleSearchText }) {
  return (
    <div>
      <form>
        <input onChange={(e) => handleSearchText(e.target.value)} />
      </form>
    </div>
  );
}
