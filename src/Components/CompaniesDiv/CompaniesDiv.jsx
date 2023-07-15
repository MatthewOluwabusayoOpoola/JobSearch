import React from "react";
import { BiTimeFive } from "react-icons/bi";

function CompaniesDiv() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const found = false;
  return (
    <div>
      {!found > 0 ? (
        <>
          <div className="mb-[1rem] mt-[1rem] items-start">
            <h1 className="text-textColor text-[25px]  font-bold w-[80%] lg:w-[400px] block">
              Comapny Not Found....
            </h1>
            <h1 className="text-textColor text-[25px]  font-bold w-[80%] lg:w-[400px] block">
              Other Results Below
            </h1>
          </div>
          {
            <div className="companyContainer flex gap-10 justify-center flex-wrap items-center py-10">
              {count.map((count, id) => (
                <div
                  key={count[id]}
                  className="group group/item singleCompany w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg"
                >
                  <div className="company flex items-center gap-2">
                    <img
                      src="./avatar.png"
                      alt="company logo"
                      className="w-[30%]"
                    />
                    <div className="grid ">
                      <span className="text-[14px] font-semibold block group-hover:text-white">
                        FrontEnd Engineer
                      </span>
                      <h6 className="text-[#ccc] text-[10px]">
                        United Kingdom
                      </h6>
                    </div>
                  </div>

                  <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] my-[20px] group-hover:text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Porro, eum maiores veritatis velit nihil aliquam ab qui
                    assumenda. Fuga unde expedita voluptatum alias dolorum
                    pariatur distinctio repellendus ratione accusamus
                    aspernatur?
                  </p>

                  <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor">
                    View
                  </button>
                </div>
              ))}
            </div>
          }
        </>
      ) : (
        <div className="companyContainer flex gap-10 justify-center flex-wrap items-center py-10">
          {count.map((count, id) => (
            <div
              key={count[id]}
              className="group group/item singleCompany w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg"
            >
              <div className="company flex items-center gap-2">
                <img
                  src="./avatar.png"
                  alt="company logo"
                  className="w-[30%]"
                />
                <div className="grid ">
                  <span className="text-[14px] font-semibold block group-hover:text-white">
                    FrontEnd Engineer
                  </span>
                  <h6 className="text-[#ccc] text-[10px]">United Kingdom</h6>
                </div>
              </div>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] my-[20px] group-hover:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
                eum maiores veritatis velit nihil aliquam ab qui assumenda. Fuga
                unde expedita voluptatum alias dolorum pariatur distinctio
                repellendus ratione accusamus aspernatur?
              </p>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor">
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompaniesDiv;
