import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  state = {
    bookshelves: []
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      bookshelves: [
        {
          title: `Currently Reading`,
          books: nextProps.books.filter(book => book.shelf === 'currentlyReading'),
        },
        {
          title: `Want to Read`,
          books: nextProps.books.filter(book => book.shelf === 'wantToRead'),
        },
        {
          title: `Read`,
          books: nextProps.books.filter(book => book.shelf === 'read'),
        }
      ]
    })
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.state.bookshelves.map((bookshelf) =>
            <Bookshelf key={bookshelf.title}
              shelfTitle={bookshelf.title}
              books={bookshelf.books}
              moveBook={this.props.moveBook}
            />
          )}
        </div>
        <div className="open-search">
          <Link
            to='/search'
          >Add a book</Link>
        </div>
      </div>
    )}
}

export default ListBooks;
