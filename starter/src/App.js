import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./services/BooksAPI";
import SearchBooks from "./components/Search/SearchBooks";
import { Route, Routes } from "react-router-dom";
import Library from "./components/Library/Library";

const App = () => {
  // data comes with the API call will be stored here for the main page
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await BooksAPI.getAll();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    getData();
  };

  const getBook = (bookId, shelf) => {
    const res = BooksAPI.get(bookId);
    updateBook(res, shelf);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Library data={data} updateBook={updateBook} getBook={getBook} />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              data={data}
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
