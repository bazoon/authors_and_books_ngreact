var React = require('react');
var Select = require('react-select');

var state = { 
  authors:[],
  books: [],
  author: '',
  book: '',
  hint: function () {
    return author.label + ' написал ' + book.label;
  }

}; 


var Hint = React.createClass({
  render: function () {
    return (

      <h1>{this.props.value}</h1>

    )
  }
});

var AuthorBooksSelect = React.createClass({
  getInitialState: function () {
    return state;
  },
  authorChanged: function (authorId) {
    if (authorId) {
      state.author = state.authors[authorId - 1];
      this.loadBooks(authorId);  
    }
    
  },
  bookChanged: function (bookId) {
   
    if (bookId) {
      state.book = state.books[bookId - 1];
      this.setHint();
      this.setState(state);  
    }
    
  },

  setHint: function () {
    state.hint = state.author.label + ' написал ' +state.book.label;
  },
  loadBooks: function (authorId) {

    var that = this;
    that.props.booksStore.getBooks(authorId).then(getBooksSuccess)

      function getBooksSuccess (books) {
        var booksOptions = books.map(function (book) {
        return {
          value: book.id,
          label: book.name
          };
        });

        state.books = booksOptions;
        state.book = booksOptions[0];
        that.setHint();
        that.setState(state);
        
      }
    
  },
  loadAuthors: function () {
    var that = this;
    this.props.authorsStore.getAuthors().then(getAuthorsSuccess);

    function getAuthorsSuccess (authors) {

      var authorsOptions = authors.map(function (author) {
        return {
          value: author.id,
          label: author.name
        };
      });

      state.authors = authorsOptions;
      state.author = authorsOptions[0];
      that.setState(state);
      that.loadBooks(state.author.value);

    }
  }
  ,
  componentDidMount: function () {
    var that = this;
    this.loadAuthors();
    
    
  },
  render: function() {
    return (
      <div>
        <Select
            name="authors"
            value={this.state.author.label}
            options={this.state.authors}
            onChange={this.authorChanged}
        />
      
      
        <Select
            name="books"
            value={this.state.book.label}
            options={this.state.books}
            onChange={this.bookChanged}
        />
        <Hint value={this.state.hint} />
      </div>
      
    )
    

  }


});



angular.module('myApp').value('AuthorBooksSelect', AuthorBooksSelect);