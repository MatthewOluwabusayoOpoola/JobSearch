import React from "react";

function Navbar() {
  return (
    <div className="Navbar relative flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>
      <p className="lg:hidden">X</p>

      <div className="menu hidden absolute top-[80%] left-0 w-full bg-white flex flex-col gap-10 p-[20px] lg:hidden items-center">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Companies
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Contact
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Register
        </li>
      </div>
      <div className="hidden menu lg:flex gap-8 items-center">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Companies
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Contact
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          Register
        </li>
      </div>
    </div>
  );
}

export default Navbar;
