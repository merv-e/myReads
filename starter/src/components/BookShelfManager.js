import React, { useEffect, useState } from 'react';
import * as BooksAPI from "../BooksAPI";

const BookShelfManager = ({ shelf, name, data, id, changeShelf, changeShelfInMenu}) => { 

    // const x =() =>  data.forEach((book) => {
  //   if (book.name !==  theBook){
  //     console.log(`${book.title} is changed to ${book.shelf}`); 
  //   // console.log("my shelf is changed!")
  //   }
  // });

  const [theBook, setTheBook ] = useState("");

  const [whichShelfIsOn, setWhichShelfIsOn] = useState(shelf);


  // useEffect(()=> {  
  //   const updateShelf = async(ev) => { 
      
  //     changeShelfInMenu(setWhichShelfIsOn(ev.target.value));
  //     setTheBook(ev.target.id);
      
  //     // console.log(theBook); 
  //     // console.log(whichShelfIsOn); 
      
  //     const x = changeShelf(theBook);

  //      const res = await BooksAPI.update(x, whichShelfIsOn);  
  //      changeShelfInMenu();        
  //     //  setWhichShelfIsOn(ev.target.value);
      
  //      console.log(res);
  //     //  console.log(whichShelfIsOn); 
          
  //   };
  //     updateShelf();
  // //    
  // //     
  //    }, [whichShelfIsOn, changeShelf, changeShelfInMenu, theBook]);


  return (
    <div 
      id={id} 
      className="book-shelf-changer">
        <select
          name={name}
          value={whichShelfIsOn}
          onChange={(e) => setWhichShelfIsOn(e.target.value)}
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
