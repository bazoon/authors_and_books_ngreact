angular.module('page', [])
	.controller('pageController', pageController);


pageController.$inject = ["$scope", 'authorsStore', 'booksStore'];

function pageController ($scope, authorsStore, booksStore) {
  var page = this;
  page.props = {};
  page.props.authorsStore = authorsStore;
  page.props.booksStore = booksStore;


  

}
