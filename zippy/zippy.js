var app = angular.module( 'zippy', [] );

app.directive( 'zippy', function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    scope: {
      title: '@',
    },
    controller: function($scope,$element) {
      $scope.toogleCnt = true;

      $scope.toogle = function() {
        $scope.toogleCnt = !$scope.toogleCnt;
      };

      $scope.showContent = function() {
        return $scope.toogleCnt;
      };
    },
    link: function(scope, element, attrs) {
      console.debug( scope );
    },
    template: "<div><h3 style='cursor: pointer;' ng-click='toogle()'>{{title}}</h3><div ng-transclude ng-show='showContent()'></div></div>"
  };
});
