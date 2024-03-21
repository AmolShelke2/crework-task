import React, { useState } from "react";
import { questions, filters } from "../utils";

const FiltersAndPagination = () => {
  const [currentFilter, setCurrentFilter] = useState(filters[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const getFilteredQuestions = () => {
    return questions.filter((question) =>
      question.category.includes(currentFilter)
    );
  };

  const getPaginatedQuestions = () => {
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return getFilteredQuestions().slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleClickNext = () => {
    const maxPage = Math.ceil(getFilteredQuestions().length / 10);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="my-2 w-full h-full py-2">
      {/* render filters */}
      <div className="flex gap-3 flex-wrap items-center">
        {filters.map((filter) => (
          <span
            key={filter}
            className={`border px-4 py-2 rounded-md text-sm
             outline-none focus:outline-none cursor-pointer ${
               currentFilter === filter
                 ? "bg-white text-black"
                 : "bg-transparent text-white"
             }`}
            onClick={() => setCurrentFilter(filter)}>
            {filter}
          </span>
        ))}
      </div>

      {/* questions  */}
      <div className="mt-4 flex flex-col gap-2 lg:h-[670px]">
        {getPaginatedQuestions().length === 0 ? (
          <p className="text-white text-center my-4">
            No questions with this category.
          </p>
        ) : (
          getPaginatedQuestions().map((question) => (
            <div
              className="w-full h-auto lg:h-[40px] mb-5"
              key={question.question}>
              <p className="text-[18px] leading-[24px] font-medium mb-3 text-[#FFFFFF]">
                {question.question}
              </p>

              <div className="flex items-center gap-4 mb-2">
                {question.category.map((category, index) => (
                  <span
                    key={index}
                    className="text-[#BDBCBC] text-[14px] leading-[21px] font-normal">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* show pagination and next-prev btn here  */}
      <div className="flex justify-end items-center gap-2 mt-2 px-4">
        <button
          className={`py-2 px-4 bg-[#FAAF3D] rounded-sm ${
            currentPage === 1 ? "hidden" : "block"
          }`}
          onClick={handleClickPrev}>
          Prev
        </button>
        <div>
          {Array.from(
            { length: Math.ceil(getFilteredQuestions().length / 10) },
            (_, index) => (
              <button
                key={index + 1}
                className={`mx-1 px-3 py-1 rounded-md border ${
                  currentPage === index + 1
                    ? "border border-[#FAAF3D] text-white"
                    : "text-white"
                }`}
                onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            )
          )}
        </div>
        <button
          className={`py-2 px-4 bg-[#FAAF3D] rounded-sm`}
          onClick={handleClickNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FiltersAndPagination;
