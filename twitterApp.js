var app = angular.module( 'twitterApp', [] );

app.controller( 'AppCtrl', function($scope) {
  $scope.loadMoreTweets = function() {
    alert('Loading tweets');
  };
}); 

app.directive( 'enter', function() {
  return function(scope, element, attrs) {
    element.bind( 'mouseenter', function() {
      console.log("I'm inside of you!");
      scope.$apply(attrs.enter);
    });
 }
});
