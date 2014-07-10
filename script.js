angular.module('docsTransclusionExample', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.name = 'Tobias';
  }])
  .directive('my-dialog', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'my-dialog.html',
      link: function (scope, element) {
        scope.name = 'Jeff';
      }
    };
  });
