import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const links = (
    <>
      <li>
        <NavLink
          className="text-[18px] font-semibold text-[#131313] py-[14px] px-[20px]"
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-[18px] font-semibold text-[#131313] py-[14px] px-[20px]"
          to={"/listedBooks"}
        >
          Listed Books
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          className="text-[18px] font-semibold text-[#131313] py-[14px] px-[20px]"
          to={"/PagesToRead"}
        >
          Pages to Read
        </NavLink>
      </li> */}
    </>
  );
  const buttons = (
    <>
      <li>
        <NavLink
          to={"/login"}
          className="text-[14px] md:text-[18px] font-bold text-[#131313] py-[8px] px-[14px] md:py-[14px] md:px-[20px] rounded-[8px]"
        >
          Log In
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/signup"}
          className="text-[14px] md:text-[18px] font-bold text-[#131313] py-[8px] px-[14px] md:py-[14px] md:px-[20px] rounded-[8px]"
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-lg bg-slate-300">
      <div className="navbar py-[22px] mb-4 max-w-6xl m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-5 mr-5 w-96 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-[28px] font-bold text-[#131313]">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-nav menu-horizontal bg-transparent px-1  gap-4">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-nav-log menu-horizontal bg-transparent px-1  gap-4">
            {buttons}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
