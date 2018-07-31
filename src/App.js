import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({
      books: books
    }))
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks/>
        )} />
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
