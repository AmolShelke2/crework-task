import React, { useState } from "react";
import { questions, filters } from "../utils";

const FiltersAndPagination = () => {
  const [currentFilter, setCurrentFilter] = useState(filters[0]);

  return (
    <div className="my-2 h-full py-2">
      {/* render filters */}
      <div className="flex gap-3 flex-wrap items-center">
        {filters.map((filter) => (
          <span
            className={`border text-white px-4 py-2 rounded-md text-sm
             outline-none focus:outline-none cursor-pointer ${
               currentFilter === filter ? "bg-white text-black" : ""
             }`}
            onClick={() => setCurrentFilter(filter)}>
            {filter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FiltersAndPagination;
