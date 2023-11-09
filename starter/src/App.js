import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./components/Search/SearchBooks";
import { Route, Routes } from "react-router-dom";
import Library from "./components/Library/Library";

const App = () => {
  // data comes with the API call will be stored here for the main page
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await BooksAPI.getAll();
    setData(res);
    /* YUKARIDAKINI SILIP SUNU BI DENEYELIM */
    //  .then(books => setData(books));
  };

  useEffect(() => {
    // eger bookshelf managerdaki veri degisiyorsa... getData'yi cagir.
    //  if(load)
    getData();
  }, [data]); //
  // not: contacts.app'de contacts'i dependency arr. yazilmamis

  // console.log(data);

  //data'yi dependency arr eklemezsek surekli render etmiyor. ancak cikarirsak da bu sefer kitap rafını değiştirdiğimizde anlık işlem yapmıyor ! :/

  // book and shelf information will be transfered from child components which are BookShelf and SearchBooks.

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    // getData(); // bu nereden cikti islevsel mi hicbir fikrim yok :/
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

// get Book async ve await silince console.log'da aldığım hataları artık almıyorum.

//getBook hicbir yerde cagrilmiyor.
