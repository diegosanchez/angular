var myFactory = angular.module( 'myFactory', ['ngResource']);

var factory = myFactory.factory( 'factory', [ '$resource', function($resource) {
  return function() {
    alert( 'Hi!' );
  };
}]);


