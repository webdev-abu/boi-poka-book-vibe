import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

function ReadAndWishListBook({ book }) {
  console.log(book);
  const {
    author,
    bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    totalPages,
  } = book;
  return (
    <div className="flex items-center justify-start border-2 border-solid p-6 gap-6 rounded-[16px]">
      <div className="flex ju flex-col lg:flex-row gap-6">
        <div className="flex justify-center items-center shadow-sm bg-[rgba(19,19,19,0.1)] py-7 px-[50px] rounded-[16px] ">
          <img src={image} className="h-[172px] " />
        </div>
        <div className="flex justify-start items-start flex-col gap-4">
          <h1 className="text-[24px] font-bold">{bookName}</h1>
          <h1 className="text-[16px] font-medium">By : {author}</h1>
          <div className="flex items-center gap-3">
            Tags :
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-[rgba(35,190,10,0.1)] text-[#23BE0A] py-[7px] px-4 rounded-[32px]"
              >
                # {tag}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <FaUserGroup />
              <p className="text-[16px] font-normal">Publisher : {publisher}</p>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineContactPage />
              <p className="text-[16px] font-normal">Page : {totalPages}</p>
            </div>
          </div>
          <div className="md:w-[53vw] divider my-0"></div>
          <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
            <button className="btn bg-[rgba(50,142,255,0.2)] rounded-[30px] text-[16px] text-[#328EFF] font-normal">
              Category: {category}
            </button>
            <button className="btn bg-[rgba(255,172,51,0.2)] rounded-[30px] text-[16px] text-[#FFAC33] font-normal">
              Rating : {rating}
            </button>
            <Link to={`/books/${bookId}`}>
              <button className="btn bg-[#23BE0A] rounded-[30px] text-[16px] text-[#FFFFFF] font-normal">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadAndWishListBook;
