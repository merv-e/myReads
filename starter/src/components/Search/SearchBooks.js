import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../services/BooksAPI";
import ShelfInfo from "./ShelfInfo";
import { PropTypes } from "prop-types";

const SearchBooks = ({ books, updateBook, getBook }) => {
  const [newSetOfBooks, setNewSetOfBooks] = useState([]);

  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);

  const searchResults =
    query === ""
      ? []
      : newSetOfBooks.filter(
          (book) => book.title.toLowerCase().includes(query.toLowerCase())
          // ||
        );

  useEffect(() => {
    // when the user navigates to the search page and types a title, id etc. it'll show the relevant books.
    const searchBooks = async () => {
      try {
        setIsLoading(true);
        const response = await BooksAPI.search(query, 20);

        if (response.error !== "empty query") {
          setIsNothingFound(false);
          setNewSetOfBooks(response);
          setError(null);
        } else setIsNothingFound(true);

      } catch (error) {
        setError("An error occurred while fetching books.");
        console.error("Error fetching books:", error);
      }
      setIsLoading(false);
    };

    const debounce = setTimeout(() => {
      if (query) {
        searchBooks();
      }
    }, 1000);

    // cleanup function
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {isLoading && <p className="loading">Loading...</p>}
      {isNothingFound && (
        <p className="no-book-found">No book is found for this query.</p>
      )}
      {!isLoading && error && <p className="error">{error}</p>}

      {!isLoading && (
        <div className="search-books-results">
          <ShelfInfo
            searchResults={searchResults}
            books={books}
            updateBook={updateBook}
            getBook={getBook}
            query={query}
          />
        </div>
      )}
    </div>
  );
};

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
  getBook: PropTypes.func.isRequired,
};

export default SearchBooks;
