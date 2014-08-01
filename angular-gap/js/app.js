var app = angular.module( 'phonecatApp', [] );

app.controller( 'PhoneListCtrl', function($scope, $http) {
  var xhr = $http.get( 'data/phones.json').success( function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'name';

});
