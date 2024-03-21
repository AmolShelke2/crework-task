import React from "react";
import FiltersAndPagination from "./FiltersAndPagination";

const InterviewQuestions = () => {
  return (
    <div className="w-full h-auto lg:w-[1026px] lg:h-[880px] mx-auto mt-4 px-2">
      {/* top-title div */}
      <div className="my-3">
        <h2 className="text-[#FDDDAE] mb-2 text-[28px] leading-[38px] lg:text-[36px] font-medium lg:leading-[48.07px] ">
          Product Management Interview Questions
        </h2>
        <p className="text-[#FFFFFF] text-[14px] leading-[21px] font-normal">
          Browse 1000+ questions from top tech companies
        </p>
      </div>
      <FiltersAndPagination />
    </div>
  );
};

export default InterviewQuestions;
