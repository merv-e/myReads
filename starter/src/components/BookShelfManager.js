import React, {  useState } from 'react';


const BookShelfManager = ({ updateBook, shelf, title, book, id, getBook, data,  newSetOfBooks, handleChange }) => { 

  // getData 

  
  //which shelf the book is on the main page
  const [whichShelf , setWhichShelf] = useState(shelf);

  //which shelf the book is on the search page
  // const [whichShelfSearchPg, setWhichShelfSearchPg] = useState("None");

  const handleSelection = (e) => {
    setWhichShelf(e.target.value);
    updateBook(book, e.target.value); 
    getBook(book, e.target.value);
  };
  
  // newSetOfBooks.forEach((book, e) => { book.id === id ? setWhichShelf(e.target.value) : setWhichShelf("None");
  // });

  return (
    <div className="book-shelf-changer">
        <select
        // right now "value" (below) correctly updates the books in the main page. 
        //In the search page, when the user choses any book, that moment, it updates that book's shelf, adds it to the main page to the correct shelf. However, if the user navigates to another page and search the same book again, it doesn't correctly show which shelf the book is on.
          value={whichShelf}
          id={id}
          name={title}
          onChange={ handleSelection } >
         <option value="none" disabled >Move to...</option>
         <option value="currentlyReading">Currently Reading</option>
         <option value="wantToRead">Want to Read</option>
         <option value="read">Read</option>
         <option value="none" >None</option>
        </select>
    </div>
  )
}

export default BookShelfManager
