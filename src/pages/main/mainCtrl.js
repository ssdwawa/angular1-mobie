require('pages/main/foot/foot.js');
require('pages/main/head/head.js');
require('pages/main/positionList/positionList.js');

angular.module('app').controller('mainCtrl',['$scope','$http',function($scope,$http){
    $scope.list='',
    $http.get('/positionList').
    success(function(resp){
        if(resp.stasus==1){
            $scope.list=resp.msg
        }
    })
}]);