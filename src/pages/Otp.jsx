import React, { useState } from "react";
import { Link } from "react-router-dom";

function Otp() {
  const [valid, setValid] = useState(true);
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full gap-10 bg-greyIsh rounded-[10px] p-[2rem] mb-[60px]">
        <form
          action=""
          className="grid gap-5 w-full md:w-[50%] bg-white p-[50px]"
          onSubmit={(e) => {
            e.preventDefault;
            setValid(false);
          }}
        >
          <p>Check email for the One Time Password (OTP)</p>
          <div>
            <input
              type="number"
              className="w-full h-[50px] bg-transparent border-[2px] border-black rounded-[10px] pl-[10px]"
              placeholder="Enter OTP"
              required
            />
          </div>
          <div>
            <p className="text-textColor justify-center font-semibold">3:45</p>
          </div>
          <div>
            <Link
              to={"/forgotPassword"}
              className="text-textColor w-full block"
            >
              Change Email Click Here
            </Link>
          </div>
          {!valid && <p className="text-red-500 font-semibold">Invalid Code</p>}
          <button
            type="submit"
            className="bg-blueColor h-full w-full p-5 px-10 rounded-[10px] text-white cursur-pointer hover:bg-blue-300 flex gap-5 items-center justify-center m-auto"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default Otp;
