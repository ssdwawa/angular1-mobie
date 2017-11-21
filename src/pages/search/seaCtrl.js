require('./sea.css');
require('./seaHead.js')
angular
    .module('app')
    .controller('seaCtrl', function ($scope, $http) {
        $scope.list = '',
        $scope.name = '';
        $http({url: './data/positionList.json', method: 'GET'}).success(function (resp) {
            $scope.list = resp
        })
        $scope.search = function () {
            alert(123)
        };
    })
