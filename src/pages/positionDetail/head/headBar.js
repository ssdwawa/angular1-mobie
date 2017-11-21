'use strict';
require('./headBar.css')
angular.module('app').directive('appHeadBar', [function(){
  return {
    restrict: 'A',
    templateUrl: 'view/position/headBar.html',
    // scope: {
    //   text: '@'
    // },
    link: function($scope) {
      $scope.back = function() {
        window.history.back();
      };
    }
  };
}]);
