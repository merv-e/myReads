import React from 'react'
import BookShelfManager from './BookShelfManager'

const Book = ({id, title, shelf,  updateBook, authors, url, theBook}) => {

  return (
 <>
     <li key={id}>
       <div className="book">
         <div className="book-top">
           <div
             className="book-cover"
             style={{
             width: 128,
             height: 193,
             backgroundImage:
              `url(${url})`
             }}
           ></div>
           <BookShelfManager
           id={id}
           updateBook={updateBook}
           theBook = {theBook}
           name = {title}
           shelf={shelf}
           />    
         </div>
         <div className="book-title">{title}</div> 
         <div className="book-authors">{authors}</div> 
         
       </div>
     </li>   
    </>
  )
}

export default Book
