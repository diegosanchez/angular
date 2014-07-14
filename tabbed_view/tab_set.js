var module = angular.module("tabs", []);

module.directive( 'myTabSet', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'tab_set.html',
    scope: { 
      name: '@name' 
    },
    controller: function($scope) {
      $scope.tabs = [];

      console.debug( $scope );

      this.createTab = function( domTab) {
        return {
          title: domTab.attr( 'title' ),
          active: true
        };
      };

      this.addTab = function( domTab ) {
        $scope.tabs.push( this.createTab(domTab) );
      };
    }
  };
});

module.directive( 'myTab', function() {
  return {
    restrict: 'E',
    require: '^myTabSet',
    replace: true,
    transclude: true,
    template: '<div id="{{title}}" class="tab-pane active" ng-transclude></div>',
    link: function(scope, element, attrs, tabSetCtrl) {
      tabSetCtrl.addTab( element );
    }
  };
});
