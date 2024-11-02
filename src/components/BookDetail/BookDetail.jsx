import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utility/addToDB";

function BookDetail() {
  const { bookId } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === parseInt(bookId));
  console.log(book);
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (bookId) => {
    addToStoredReadList(bookId);
  };
  const handleWishList = (bookId) => {
    addToStoredWishList(bookId);
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row md:gap-12">
        <div className="flex justify-center items-center shadow-sm bg-[rgba(19,19,19,0.1)] p-[74px] rounded-[16px] ">
          <img src={image} className="h-[564px]" />
        </div>
        <div className="flex-1 gap-4">
          <h1 className="text-[40px] font-bold">{bookName}</h1>
          <div className="text-[20px] font-medium">By : {author}</div>
          <div className="border-t-2 border-dashed mt-4"></div>
          <div className="text-[rgba(19,19,19,0.8)]  my-2">{category}</div>
          <div className="border-t-2 border-dashed mb-4"></div>
          <div className="mb-4">Review : {review}</div>
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

          <div className="overflow-x-auto my-0">
            <table className="table ">
              <tbody>
                <tr className="border-b-0">
                  <td className="pl-0 py-2">Number of Pages :</td>
                  <td className="pl-0 py-2">{totalPages}</td>
                </tr>
                <tr className="border-b-0">
                  <td className="pl-0 py-2">Publisher :</td>
                  <td className="pl-0 py-2">{publisher}</td>
                </tr>
                <tr className="border-b-0">
                  <td className="pl-0 py-2">Year of Publishing :</td>
                  <td className="pl-0 py-2">{yearOfPublishing}</td>
                </tr>
                <tr className="border-b-0">
                  <td className="pl-0 py-2">Rating :</td>
                  <td className="pl-0 py-2">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline outline-[rgba(19,19,19,0.3)] mr-4"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(bookId)}
              className="btn btn-success"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
