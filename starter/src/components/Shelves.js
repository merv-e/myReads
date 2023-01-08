import React from 'react'
import Book from './Book';

const Shelves = ({shelf, nameOfTheShelf, data, updateBook, getBook}) => {
  

    // const [currentlyReading, setCurrentlyReading] = useState(data.filter((book) => book.shelf === "currentlyReading"));
    
    // const [wantToRead, setWantToRead] = useState(data.filter((book) => book.shelf === "wantToRead"));
    // //               
    // const [read, setRead] = useState(data.filter((book) => book.shelf === "read"));
    
    // const [none, setNone] = useState([]);

// const mappedData = 
//   data.filter((book) => 
//   book.shelf === "currentlyReading"
//   ? setCurrentlyReading([...currentlyReading ,theBook])
//   : book.shelf === "wantToRead" 
//   ? setWantToRead([...wantToRead, theBook])
//   : book.shelf === "read" 
//   ? setRead([...read, theBook])
//   : setNone([...none, theBook])
//   );
//   console.log(mappedData);
  
// const books = 
//   mappedData === "currentlyReading" 
//   ? setCurrentlyReading(currentlyReading.concat(theBook))
//   : mappedData === "wantToRead" 
//   ? setWantToRead([...wantToRead, theBook])
//   : mappedData === "read" 
//   ? setRead([...read, theBook])
//   : setNone([...none, theBook]);

// const filterShelf = ;
// console.log(shelf);
 
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{nameOfTheShelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
         {data.filter(book =>
            <Book 
              data={data} 
              key={book.id}
              // id = {book.id}
              shelf={shelf}
              title = {book.title}
              authors = {book.authors}
              url={book.imageLinks.smallThumbnail }
              book = {book}
              updateBook={updateBook}
            />  
        )}
          </ol>
        </div>
    </div>
  )
}

export default Shelves
