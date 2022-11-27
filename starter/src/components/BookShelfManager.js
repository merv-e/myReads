import React from 'react';

const BookShelfManager = ({ updateBook, shelf, name, theBook}) => { 

  return (
    <div className="book-shelf-changer">
        <select
          name={name}
          value={shelf}
          onChange={(e) => updateBook(theBook, e.target.value)}
          >
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
