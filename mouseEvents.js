angular.module( 'eventsApp', [] )
  .directive( 'enter', function() {
    return function(scope, element, attrs) {
      element.bind( 'mouseenter', function() {
        console.log("I'm inside of you!", attrs);
        element.addClass(attrs.enter);
      })
    }
  }) 
  .directive( 'leave', function() {
    return function(scope, element, attrs) {
      element.bind( 'mouseleave', function() {
        console.log("I leave it!", attrs);
        element.removeClass(attrs.enter);
      })
    }
  }) 
