import "./App.css";
import { useCallback, useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import SearchBooks from "./components/SearchBooks";
import { Route, Routes } from "react-router-dom";

const App = () => {

  // data comes with the API call will be stored here for the main page
  const [data, setData] = useState([]);    

  // data comes with the API call will be stored here for the search page
  const [newSetOfBooks, setNewSetOfBooks] = useState([]);
  
  // cleanup must be added. Because the page re-renders continuously particularly with the getAll() and search() API calls.  
  
  
    const getData =  useCallback(() => {
     const x = async () => {
        const res = await BooksAPI.getAll();
        setData(res);
        console.log(res);
      };
    }, [])   

  // when the user navigates to the search page and types a title it'll show the relevant books.
  const searchingBooks = useCallback(() => {
    const s =  (query, numberOfResults) => {
      const search = async () => { 
        const result = await BooksAPI.search(query, numberOfResults);
        setNewSetOfBooks(result);
        console.log(newSetOfBooks);
        // console.log(result);
       };
     };
   }, [newSetOfBooks]);

   // book and shelf information will be transfered from child components which are BookShelf and SearchBooks.
   const updateBook = (book, shelf) => { 
    BooksAPI.update(book, shelf);
  };
  

  //  bookId and shelf information will be transfered from child components.
  const getBook = (bookId, shelf) => {
    //async ve await silindi.
    const res=  BooksAPI.get(bookId); 
    // this call is made, so that after user searchs a book and is chosen to be on any shelf, it'll also update the book in backend.
    updateBook(res, shelf);
  // };
};
      
  useEffect(()=> { 
    getData();
    
    const isUserSearching = setTimeout(()=> {
      searchingBooks();
    }, 3000);
    return () => {
      clearTimeout(searchingBooks());
    }
  }, [getData, searchingBooks ]); 
  
    return (
      <div className="app">
        <Routes>
          <Route 
          exact path="/"
          element={
            <BookShelf 
              data = {data}
              updateBook={updateBook}
              getBook={getBook}
            />        
          }
          />
          
          <Route 
          path="/search"
          element = {
            <SearchBooks 
              data = {data}
              updateBook={updateBook}
              onSearch={(query,numberOfResults) => searchingBooks(query, numberOfResults)} 
              newSetOfBooks={newSetOfBooks}
            />
          }
          />  

        </Routes>   
      </div>
    );
}

export default App;


// get Book async ve await silince console.log'da aldığım hataları artık almıyorum. 