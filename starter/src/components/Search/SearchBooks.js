import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../services/BooksAPI";
import ShelfInfo from "./ShelfInfo ";
import { PropTypes } from "prop-types";

const SearchBooks = (props) => {
  const { data, updateBook, getBook } = props; //destructuring

  // data comes with the API call will be stored in the variable below.
  const [newSetOfBooks, setNewSetOfBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // it'll take the query variable (a.k.a where user searchs for books) , if it's empty which is the default value, it'll show nothing. However, if user starts typing something the query will be updated and searchResults variable will filter it accordingly.

  const searchResults =
    query === ""
      ? newSetOfBooks //[]
      : newSetOfBooks.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );

  useEffect(() => {
    // when the user navigates to the search page and types a title, id etc. it'll show the relevant books.
    const searchBooks = async () => {
      try {
        setIsLoading(true);
        const response = await BooksAPI.search(query, 20);

        console.log("response", response);
        console.log("response:", response.error);

        if (!response.error) {
          setNewSetOfBooks(response);
          setError(null);
        }
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
    }, 3000);

    // cleanup function
    return () => clearTimeout(debounce);
  }, [query]);

  console.log("newSetOfBooks", newSetOfBooks);
  console.log("searchResults", searchResults);

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

      {!isLoading &&  searchResults.length === 0 && (
        <p>No books found for the query.</p>
      )}

      {!isLoading && error && <p style={{ color: "red" }}>{error}</p>}

      {!isLoading && (
        <div className="search-books-results">
          <ShelfInfo
            searchResults={searchResults}
            data={data}
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
  data: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
  getBook: PropTypes.func.isRequired,
};

export default SearchBooks;
