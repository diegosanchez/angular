var controllers = angular.module( 'phonecatControllers', [] );

controllers.controller( 'PhoneListCtrl', function($scope, $http) {
  var xhr = $http.get( 'data/phones.json').success( function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'name';

});


controllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    console.log($routeParams);
    $scope.phoneId = $routeParams.phoneId;
}]);
