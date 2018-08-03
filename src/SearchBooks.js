import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI";
import Book from './Book';

class SearchBooks extends Component {
  state = {
    query: '',
    bookResults: [],
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    BooksAPI.search(query)
      .then((bookResults) => {
        if (bookResults === undefined || bookResults === null || bookResults.error) {
          this.setState({bookResults: []})
        }
        else {
          this.setState(() => ({
            bookResults
          }))
        }
      })
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.bookResults && this.state.bookResults.map((book) =>
              <li key={book.id}>
                <Book
                  bookObject={book}
                  moveBook={this.props.moveBook}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
