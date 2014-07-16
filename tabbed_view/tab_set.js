var module = angular.module("tabs", []);

module.directive( 'myTabset', function() {
  return { 
    restrict: 'E', 
    transclude: true,
    templateUrl: './tab-set.html', replace: true };
});
