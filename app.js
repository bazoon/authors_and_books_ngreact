require("babel/register");
require('react')
require('ngreact')
require("./authors/authors");
require("./books/books");
require("./selected_factory");
require("./page_controller");
require("./popular_authors_controller");

angular.module('myApp', ['react','page', 'logic.services', 'authors', 'books']);

require('./sel');