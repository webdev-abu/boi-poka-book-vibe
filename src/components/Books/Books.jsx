import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

function Books() {
  const [books, setBooks] = useState([]);
  // const [title,setTitle] =useState("");
  useEffect(() => {
    fetch("./booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div>
      <h2 className="text-center font-bold text-[40px] text-[#131313] my-8">
        Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-9">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
}

export default Books;
