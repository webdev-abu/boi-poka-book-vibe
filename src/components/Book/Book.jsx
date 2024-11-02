import React from "react";
import { Link } from "react-router-dom";

function Book({ book }) {
  console.log(book);
  const { author, bookId, bookName, category, image, publisher, rating, tags } =
    book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card p-6 border-2 border-solid border-[rgba(19,19,19,0.2)]">
        <figure className="bg-[#F3F3F3] py-8 rounded-[16px]">
          <img src={image} alt="Shoes" className="h-[166px]" />
        </figure>
        <div className="card-body  px-0 pb-0 gap-4">
          <div className="flex items-center gap-3">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-[rgba(35,190,10,0.1)] text-[#23BE0A] py-[7px] px-4 rounded-[32px]"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between items-center">
            <div className="text-[rgba(19,19,19,0.8)] ">{category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Book;
