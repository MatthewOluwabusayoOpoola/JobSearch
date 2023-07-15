import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-center w-full gap-10 bg-greyIsh rounded-[10px] p-[3rem] mb-[60px]">
        <form
          action=""
          className="grid  gap-5 w-full md:w-[50%] bg-white p-[50px]"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/otp");
          }}
        >
          <div>
            <input
              type="email"
              className="w-full h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div>
            <Link to={"/register"} className="text-textColor">
              Don't Have an Account Click Here
            </Link>
          </div>
          <button
            type="submit"
            className="bg-blueColor h-full w-[250px] p-5 px-10 rounded-[10px] text-white cursur-pointer hover:bg-blue-300 flex gap-5 items-center justify-center w-full"
          >
            SEND OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
