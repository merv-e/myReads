import React from "react";
import BookShelfManager from "./BookShelfManager";

const Book = ({
  id,
  title,
  shelf,
  updateBook,
  authors,
  url,
  book,
  getBook,
}) => {
  return (
    <>
      <li key={id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${url})`,
              }}
            ></div>
            <BookShelfManager
              updateBook={updateBook}
              shelf={shelf}
              title={book.title}
              book={book}
              id={id}
              getBook={getBook}
            />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors && authors.join(", ")}</div>
        </div>
      </li>
    </>
  );
};

export default Book;
