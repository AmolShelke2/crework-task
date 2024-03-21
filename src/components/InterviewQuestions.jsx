import React from "react";
import FiltersAndPagination from "./FiltersAndPagination";

const InterviewQuestions = () => {
  return (
    <div className="w-[1026px] h-[880px] mx-auto mt-4">
      {/* top-title div */}
      <div className="my-2">
        <h2 className="text-[#FDDDAE] mb-2 text-[36px] font-medium leading-[48.07px] ">
          Product Management Interview Questions
        </h2>
        <p className="text-[#FFFFFF] text-[15px] leading-[21px] font-normal">
          Browse 1000+ questions from top tech companies
        </p>
      </div>
      <FiltersAndPagination />
    </div>
  );
};

export default InterviewQuestions;
