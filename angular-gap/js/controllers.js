var controllers = angular.module( 'phonecatControllers', ['phonecatFilters'] );

controllers.controller( 'PhoneListCtrl', function($scope, $http) {
  var xhr = $http.get( 'data/phones.json').success( function(data) {
    console.log($scope, $scope.$id);
    $scope.phones = data;
  });

  $scope.orderProp = 'name';

});

controllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];

      $scope.setMainImage = function( inputImage ) {
        $scope.mainImageUrl = inputImage;
      };
    });
  }]);
