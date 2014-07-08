angular.module( 'eventsApp', [] )
  .directive( 'enter', function() {
    return function(scope, element) {
      element.bind( 'mouseenter', function() {
        console.log("I'm inside of you!");
      })
    }
  }) 
  .directive( 'leave', function() {
    return function(scope, element) {
      element.bind( 'mouseleave', function(event) {
        console.log("I leave it!", event);
      })
    }
  }) 
