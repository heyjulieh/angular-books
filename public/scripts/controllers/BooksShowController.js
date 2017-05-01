console.log('this is working!')

angular
  .module('readingrainbow')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject = ['$http', '$routeParams', '$location'];

function BooksShowController ($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.book = json.data;
    console.log('Got books.', json)
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
