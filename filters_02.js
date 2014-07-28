var myApp = angular.module('myApp', []);

myApp.factory( 'Avengers', function() {
  var Avengers = {};

  console.debug( 'Factory Avengers' );

  Avengers.cast = [
    { name: 'lu', character: 'obi' },
    { name: 'lx', character: 'yoda' } 
  ];

  return Avengers;

});

myApp.controller( 'AvengersCtrl', function ($scope, Avengers) {
  console.debug( 'AvengersCtrl' );
  $scope.avengers = Avengers;

  $scope.filter_class = function () {
    return "none-results";
  }
});
