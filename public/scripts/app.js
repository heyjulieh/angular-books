console.log('this is working!')

angular
  .module('readingrainbow', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books/bookindex.html',
      controllerAs: 'booksIndexCtrl',
      controller: 'BooksIndexController'
    })
    .when('/books/:id', {
      templateUrl: '/templates/books/bookshow.html',
      controllerAs: 'booksShowCtrl',
      controller: 'BooksShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
