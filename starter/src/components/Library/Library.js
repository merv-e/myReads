import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const Library = ({ books, updateBook, getBook }) => {
  const shelfName = [
    { shelf: "currentlyReading", name: "Currently Reading" },
    { shelf: "wantToRead", name: "Want To Read" },
    { shelf: "read", name: "Read" },
    { shelf: "none", name: "None" }, //this option doesn't seem to be necessary, check it out.
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div> {/* this div mght be deleted. */}
          {shelfName
            .filter((name) => name.shelf !== "none") //if "none" is not useful, instead of filtering, just map!
            .map((info, index) => (
              <Shelf
                key={index}
                shelfNamesImmutable={info.shelf}
                nameOfTheShelf={info.name}
                books={books}
                updateBook={updateBook}
                getBook={getBook}
              />
            ))}
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Library.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Library;
