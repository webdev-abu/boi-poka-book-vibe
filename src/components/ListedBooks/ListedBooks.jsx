import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDB";
import ReadAndWishListBook from "../Book/ReadAndWishListBook";
import { FaSortDown } from "react-icons/fa6";

function ListedBooks() {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const allBooks = useLoaderData();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // console.log(storedReadList, storedReadListInt, allBooks);
    const readBooksList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    // console.log(readBooksList);
    console.log(readBooksList);
    setReadList(readBooksList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    // console.log(storedWishList, storedWishListInt, allBooks);
    const WishBooksList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    // console.log(WishBooksList);
    console.log(WishBooksList);
    setWishList(WishBooksList);
  }, []);

  const handleSort = (sort) => {
    // if (sort === "title") {
    //   allBooks.sort((a, b) => a.title.localeCompare(b.title));
    // }
    setSort(sort);
    if (sort === "Rating") {
      const sortReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortReadList);
      const sortWishList = [...wishList].sort((a, b) => a.rating - b.rating);
      setWishList(sortWishList);
    } else if (sort === "Number of pages") {
      const sortReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortReadList);
      const sortWishList = [...wishList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setWishList(sortWishList);
    } else if (sort === "Publisher year") {
      const sortReadList = [...readList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadList(sortReadList);
      const sortWishList = [...wishList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setWishList(sortWishList);
    } else {
      readList;
    }
  };

  return (
    <div>
      <div className="font-bold text-[28px] text-[#131313] text-center bg-[rgba(19,19,19,0.1)] my-8 py-[32px] rounded-[16px]">
        Books
      </div>
      <div className="flex justify-center items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex justify-center gap-4 rounded-[8px] bg-[#23BE0A] text-center font-semibold text-[18px] text-white place-items-start py-[16px] px-[40px]"
          >
            {sort ? (
              `Sort by : ${sort}`
            ) : (
              <>
                Sort By <FaSortDown />
              </>
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[rgba(19,19,19,0.1)] rounded-box z-[1] w-full p-2 shadow font-normal text-[16px] text-[#131313]"
          >
            <li onClick={() => handleSort("Rating")}>
              <a>Rating </a>
            </li>
            <li onClick={() => handleSort("Number of pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSort("Publisher year")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {/* <h2 className="">Books I Read : {readList.length}</h2> */}
          <div className="grid grid-cols-1 gap-6 my-8">
            {readList.map((book) => (
              <ReadAndWishListBook key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Books Wishlist</h2>
          <div className="grid grid-cols-1 gap-6 my-8">
            {wishList.map((book) => (
              <ReadAndWishListBook key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ListedBooks;
