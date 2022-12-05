import React, { useEffect, useState } from 'react';
const BookShelfManager = ({ updateBook, shelf, name, theBook, id, getBook, data, getData, newSetOfBooks, handleChange}) => { 

  //which shelf the book is on the main page
  const [whichShelf , setWhichShelf] = useState(shelf);

  //which shelf the book is on the search page
  // const [whichShelfSearchPg, setWhichShelfSearchPg] = useState("None");


  const handleSelection = (e) => {
    setWhichShelf(e.target.value);
    updateBook(theBook, e.target.value); 
    // getBook(theBook, e.target.value);
  };
  
  // newSetOfBooks.forEach((book, e) => { book.id === id ? setWhichShelf(e.target.value) : setWhichShelf("None");
  // });

  return (
    <div className="book-shelf-changer">
        <select
        // right now "value" (below) correctly updates the books in the main page. 
        //In the search page, when the user choses any book, that moment, it updates that book's shelf, adds it to the main page to the correct shelf. However, if the user navigates to another page and search the same book again, it doesn't correctly show which shelf the book is on.
          value={whichShelf}
          name={name}
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
