import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div className="flex items-center justify-center w-full gap-10 bg-greyIsh rounded-[10px] p-[2rem] mb-[60px]">
        <form
          action=""
          className="flex flex-col  gap-5 w-full md:w-[50%] bg-white p-[50px]"
        >
          <div>
            <input
              type="text"
              className="w-full  h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full  h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full  h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter Email Address"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full  h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter Pass Code"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full  h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Confirm Pass Code"
            />
          </div>
          <div>
            <Link to={"/login"} className="text-textColor w-full">
              Have an account? Login
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blueColor h-full w-[250px] p-5 px-10 rounded-[10px] text-white cursur-pointer hover:bg-blue-300 flex gap-5 items-center justify-center"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
