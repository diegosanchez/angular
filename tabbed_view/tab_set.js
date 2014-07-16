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

      this.createTab = function(domTab) {
        return {
          title: domTab.attr( 'title' ),
          active: true
        };
      };

      this.addTab = function( domTab ) {
        var new_tab = this.createTab(domTab);
        console.debug( $scope.tabs.length );
        new_tab.active = ( $scope.tabs.length == 0 ) ? true : false;

        if ( new_tab.active ) {
          console.debug( 'active' );
          domTab.addClass( 'active' );
        }

        $scope.tabs.push( new_tab );
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
    scope: { 
      title: '@title'
    },
    template: '<div id="{{title}}" class="tab-pane" ng-transclude></div>',
    link: function(scope, element, attrs, tabSetCtrl) {
      tabSetCtrl.addTab( element );
    }
  };
});
