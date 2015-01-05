var app = angular.module("superhero", [])
 
app.directive("lvMostPopular", function(){
  return {
    restrict: "E",
    template: '<div>hi!</div>',
    replace: true 
  };
});
 
app.directive("flash", function(){
  return {
   restrict: "A",
   link: function(){
       alert("I'm working faster");
     }
  };
}); 
