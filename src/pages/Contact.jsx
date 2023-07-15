import React from "react";
import ValueDiv from "../Components/ValueDiv/ValueDiv";
import { AiOutlineSend, AiOutlineSortAscending } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <div className="grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
        <h1 className="text-textColor text-[40px] py-[2rem] font-bold w-[80%] lg:w-[400px] block">
          Contact Us
        </h1>

        <form action="" className="grid gap-10 w-full">
          <div className="lg:flex grid gap-10 ">
            <input
              type="text"
              className="w-full lg:w-[38%] h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter First Name"
            />
            <input
              type="text"
              className="w-full lg:w-[38%] h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full lg:w-[80%] h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter Email Address"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="w-full lg:w-[80%] h-[200px] bg-transparent border-[2px] border-black rounded-[10px] p-[10px]"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blueColor h-full w-[250px] p-5 px-10 rounded-[10px] text-white cursur-pointer hover:bg-blue-300 flex gap-5 items-center"
          >
            SEND MESSAGE <AiOutlineSend className="text-[20px]" />
          </button>
        </form>
      </div>

      <ValueDiv />
    </div>
  );
}

export default Contact;
