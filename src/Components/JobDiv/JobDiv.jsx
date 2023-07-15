import React from "react";
import { BiTimeFive } from "react-icons/bi";

function JobDiv() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {count.map((count, id) => (
        <div
          key={count[id]}
          className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg"
        >
          <span className="flex justify-between items-center gap-4">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
              Web Developer
            </h1>
            <span className="flex items-center text-[#ccc] gap-1">
              <BiTimeFive /> Now
            </span>
          </span>

          <h6 className="text-[#ccc]">United Kingdom</h6>
          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, eum
            maiores veritatis velit nihil aliquam ab qui assumenda. Fuga unde
            expedita voluptatum alias dolorum pariatur distinctio repellendus
            ratione accusamus aspernatur?
          </p>
          <div className="company flex items-center gap-2">
            <img src="./avatar.png" alt="company logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">
              FrontEnd Engineer
            </span>
          </div>
          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor ">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobDiv;
