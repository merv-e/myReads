import React from "react";
import BookShelfManager from "./BookShelfManager";

const Book = ({
  id,
  title,
  shelf,
  authors,
  url,
  book,
  updateBook,
  getBook,
}) => {
  return (
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
            key={id}
            id={id}
            book={book}
            title={book.title}
            shelf={shelf}
            updateBook={updateBook}
            getBook={getBook}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(", ")}</div>
      </div>
    </li>
  );
};

export default Book;
