import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';


class ListBooks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: props.books
    }
  }
  componentWillReceiveProps(props) {
    this.setState({books: props.books})
  }
  render() {
    const read = this.state.books.filter(book => book.shelf === 'read');
    const wantToRead = this.state.books.filter(book => book.shelf === 'wantToRead');
    const currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReading.map((book) =>
                  <li key={book.id}>
                    <Book
                      bookObject={book}
                    />
                  </li>
                )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead.map((book) =>
                  <li key={book.id}>
                    <Book
                      bookObject={book}
                    />
                  </li>
                )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map((book) =>
                  <li key={book.id}>
                    <Book
                      bookObject={book}
                    />
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
