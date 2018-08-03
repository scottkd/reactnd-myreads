import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

function ListBooks(props) {
  const read = props.books.filter(book => book.shelf === 'read');
  const wantToRead = props.books.filter(book => book.shelf === 'wantToRead');
  const currentlyReading = props.books.filter(book => book.shelf === 'currentlyReading');
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf
          shelfTitle='Currently Reading'
          books={currentlyReading}
          moveBook={props.moveBook}
        />
        <Bookshelf
          shelfTitle='Want to Read'
          books={wantToRead}
          moveBook={props.moveBook}
        />
        <Bookshelf
          shelfTitle='Read'
          books={read}
          moveBook={props.moveBook}
        />
      </div>
      <div className="open-search">
        <Link
          to='/search'
        >Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks;
