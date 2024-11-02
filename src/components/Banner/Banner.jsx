import React from "react";
import BannerImg from "../../assets/books.jpg";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="hero bg-base-200 rounded-[24px] p-0">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center py-[10px] px-[0px] md:py-[80px] md:px-[120px]">
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-xl" />
        <div>
          <h1 className="text-[32px] md:text-[56px] font-bold text-[#131313] mb-[48px]">
            Books to freshen up your bookshelf
          </h1>

          {/* <button className="btn btn-primary">View The List</button> */}
          <NavLink
            to={"/listedBooks"}
            className="bg-[#23be0a] text-[20px] font-bold text-[#ffffff] py-[14px] px-[20px] rounded-[8px]"
          >
            View The List
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Banner;
