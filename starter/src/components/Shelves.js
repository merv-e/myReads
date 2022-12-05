import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book'


const Shelves = ({ data, updateBook, getBook }) => {   

  const shelfName = [
    "Currently Reading", 
    "Want To Read", 
    "Read",
    "None"
  ];

  return (
  <div className="list-books"> 
    <div className="list-books-title"> 
        <h1>MyReads</h1>
    </div>
    <div className="list-books-content"> 
        <div>
          <Book 
          shelf = {shelfName[0]} 
          updateBook={updateBook}
          // kitap bilgisi id vs gondermemiz gerekiyor!
           />
          <Book 
          shelf = {shelfName[1]}
          updateBook={updateBook}
           />
          <Book 
          shelf = {shelfName[2]}
          updateBook={updateBook}
          />
             
          <div className="open-search">    
            <Link to="/search">Add a book</Link>
          </div>

        </div>
        </div>
  </div>
  )
}

Shelves.propTypes = {
  data :  PropTypes.array.isRequired,
  updateBook :  PropTypes.func.isRequired
}

export default Shelves
