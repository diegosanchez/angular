var module = angular.module("tabs", []);

module.directive( 'mierda', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateURL: 'tab_set.html',
    scope: { name: '=name' },
    link: function(scope, element, attrs) {
      console.debug( scope, element, attrs);
    }
  };
});
