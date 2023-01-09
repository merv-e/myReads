import React, {  useState } from 'react';

const BookShelfManager = ({ updateBook, shelf, title, book, id, getBook, data,  newSetOfBooks, handleChange }) => { 

  // getData 

  //which shelf the book is on the main page
  const [whichShelf , setWhichShelf] = useState(shelf);


  const handleSelection = (e) => {
    // console.log(whichShelf);
    // console.log(e.target.value);
    setWhichShelf(e.target.value);
    updateBook(book, e.target.value); 
    // console.log(e.target.value);
    // console.log(whichShelf);
    getBook(id, e.target.value);
  };
  
  return (
    <div className="book-shelf-changer">
        <select
        // right now "value" (below) correctly updates the books in the main page. 
        //In the search page, when the user choses any book, that moment, it updates that book's shelf, adds it to the main page to the correct shelf. However, if the user navigates to another page and search the same book again, it doesn't correctly show which shelf the book is on.
          value={whichShelf}
          id={id}
          name={title}
          onChange={ handleSelection } >
         <option value="moveTo" disabled >Move to...</option>
         <option value="currentlyReading">Currently Reading</option>
         <option value="wantToRead">Want to Read</option>
         <option value="read">Read</option>
         <option value="none" >None</option>
        </select>
    </div>
  )
}

export default BookShelfManager
