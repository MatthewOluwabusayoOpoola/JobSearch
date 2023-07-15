import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight, BiX } from "react-icons/bi";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="Navbar relative flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <Link
          to={"/"}
          className="logo text-[25px] text-blueColor"
          onClick={() => {
            setMobile(false);
          }}
        >
          <strong>Job</strong>Search
        </Link>
      </div>
      {mobile ? (
        <BiX
          className="lg:hidden cursor-pointer text-[30px]"
          onClick={() => {
            setMobile(!mobile);
          }}
        />
      ) : (
        <BiMenuAltRight
          className="lg:hidden cursor-pointer text-[30px]"
          onClick={() => {
            setMobile(!mobile);
          }}
        />
      )}

      <div
        className={`menu absolute top-[80%] left-0 w-full bg-white flex flex-col gap-10 p-[20px] lg:hidden items-center z-10 shadow-lg shadow-grayIsh-400/700 hover:shadow-lg ${
          !mobile && "hidden"
        }`}
      >
        <Link
          to="/"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
          onClick={() => {
            setMobile(false);
          }}
        >
          Jobs
        </Link>
        <Link
          to="/companies"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
          onClick={() => {
            setMobile(false);
          }}
        >
          Companies
        </Link>
        <Link
          to="/about"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
          onClick={() => {
            setMobile(false);
          }}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
          onClick={() => {
            setMobile(false);
          }}
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
          onClick={() => {
            setMobile(false);
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
          onClick={() => {
            setMobile(false);
          }}
        >
          Register
        </Link>
      </div>
      <div className="hidden menu lg:flex gap-8 items-center">
        <Link to="/" className="menuList text-[#6f6f6f] hover:text-blueColor">
          Jobs
        </Link>
        <Link
          to="/companies"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          Companies
        </Link>
        <Link
          to="/about"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          Contact
        </Link>
        <Link
          to="/login"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
