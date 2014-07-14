var module = angular.module("tabs", []);

module.directive( 'myTabSet', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'tab_set.html',
    scope: { name: '@name' },
    link: function(scope, element, attrs) {
      console.debug( scope);
      console.debug( scope.$parent );
    }
  };
});
