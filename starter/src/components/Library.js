import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelves from './Shelves'


const Library = ({ data, updateBook, getBook }) => {   

  const shelfName = [
    {shelf: "currentlyReading", name: "Currently Reading" },
    {shelf: "wantToRead" , name: "Want To Read"},
    {shelf:"read", name: "Read"},
    {shelf:"none", name: "None"} //this option doesn't seem to be necessary, check it out.
  ];

  return (
  <div className="list-books"> 
    <div className="list-books-title"> 
        <h1>MyReads</h1>
    </div>
    <div className="list-books-content"> 
      <div>
        {
        shelfName.filter(name => name.shelf !== "none") //if "none" is not useful, instead of filtering, just map! 
        .map((info, index) => (
          <Shelves 
          key = {index}
          shelfNamesImmutable={info.shelf}
          nameOfTheShelf = {info.name}
          data={data} 
          updateBook={updateBook}
          getBook = {getBook}
          />
        ))
        }
        <div className="open-search">    
          <Link to="/search">Add a book</Link>
        </div>

      </div>
    </div>
  </div>
  )
}

Library.propTypes = {
  data :  PropTypes.array.isRequired,
  updateBook :  PropTypes.func.isRequired
}

export default Library
