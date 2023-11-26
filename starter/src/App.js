import "./App.css";
import { useCallback, useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./components/Search/SearchBooks";
import Library from "./components/Library/Library";

const App = () => {
  // books comes with the API call will be stored here for the main page
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  }, []);

  // const { shelf } = books;
  // console.log(shelf);

  useEffect(() => {
    fetchBooks();
    console.log("Fetching Books!!");
  }, [fetchBooks]);

  // console.log(books);

  //  bookId and shelf information will be transfered from child components.
  const getBook = (bookId, shelf) => {
    const res = BooksAPI.get(bookId);
    console.log("GetBook is working!");
    updateBook(res, shelf);

    console.log("GETBOOK", res, shelf);
  };
  // this call is made (getBook), so that after user searchs a book and is chosen to be on any shelf, it'll also update the book in backend.

  // book and shelf information will be transfered from child components which are BookShelf and SearchBooks.

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    console.log("UPDATEBOOK:", "Book:", book, "Shelf:", shelf);

    fetchBooks();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Library books={books} updateBook={updateBook} getBook={getBook} />
          }
        />

        <Route
          path="/search"
          element={
            <SearchBooks
              books={books}
              updateBook={updateBook}
              getBook={getBook}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
