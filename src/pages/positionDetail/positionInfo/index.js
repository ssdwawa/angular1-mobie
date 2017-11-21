require('./index.css')
angular.module('app').directive('appPositionInfo', [function () {
    return {
        restrict: 'A',
        templateUrl: 'view/position/positionInfo.html',
        link: function ($scope) {
            $scope.isActive = true;
            var el = angular.element('.po-info');
            console.log(el)
        }
    }
}])