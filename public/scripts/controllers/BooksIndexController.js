console.log('this is working!')

angular
  .module('readingrainbow')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http) {
  var vm = this;
  vm.newBook = {
    title: 'Work Rules!: Insights from Inside Google That Will Transform How You Live and Lead',
    author: 'Lazlo Bock',
    releaseDate: 'April 7, 2015',
    image: 'https://www.workrules.net/img/work-rules.png'
  };

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.books = response.data.books;
    console.log('success', response);
  }, function errorCallback(response) {
    console.log('There was an error getting the books', response);
  });

  vm.createBook = function () {
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books/',
      data: vm.newBook,
    }).then(function successCallback(response) {
      vm.books.push(response.data.books);
      console.log('new book');
    }, function errorCallback(response) {
      console.log('There was an error posting the book', response);
    });
  }

  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + book._id,
      data: vm.book
    }).then(function successCallback(json) {
      console.log('Success!', json)
    }, function errorCallback(response) {
      console.log('There was an error editing the book', response);
    });
  }

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books'+ '/' + book._id
    }).then(function successCallback(json) {
      var index = vm.books.indexOf(book);
      vm.books.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the book', response);
    });
  }
}
