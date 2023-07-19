import "./App.css";
import { useCallback, useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./components/Search/SearchBooks";
import Library from "./components/Library/Library";

const App = () => {
  // books comes with the API call will be stored here for the main page
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback( async() => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  }, []);

  useEffect(() => {
    // eger bookshelf managerdaki veri degisiyorsa... fetchBooks'yi cagir.
    //  if(load)
    fetchBooks();
  }, [fetchBooks]); 
  // not: contacts.app'de contacts'i dependency arr. yazilmamis

  console.log(books); 

  //books'yi dependency arr eklemezsek surekli render etmiyor. ancak cikarirsak da bu sefer kitap rafını değiştirdiğimizde anlık işlem yapmıyor ! :/

  // book and shelf information will be transfered from child components which are BookShelf and SearchBooks.

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    fetchBooks();
  };

  //  bookId and shelf information will be transfered from child components.
  const getBook = (bookId, shelf) => {
    const res = BooksAPI.get(bookId);
    updateBook(res, shelf);
  };

  // this call is made (getBook), so that after user searchs a book and is chosen to be on any shelf, it'll also update the book in backend.

  // That's what i Thought it would do (above), however it perfectly works without this API call. I'm not entirely sure what I'm supposed to use this for.

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Library
              books={books}
              updateBook={updateBook}
              getBook={getBook}
            />
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
}

export default App;

// get Book async ve await silince console.log'da aldığım hataları artık almıyorum. 

//getBook hicbir yerde cagrilmiyor.