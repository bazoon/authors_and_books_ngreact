require("babel/register");
require('react')
require('ngreact')
require("./authors/authors");
require("./books/books");
require("./page_controller");
require("./popular_authors_controller");

angular.module('myApp', ['react','page', 'authors', 'books']);

require('./sel');