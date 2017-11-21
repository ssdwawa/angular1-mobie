require('./company.css')
angular.module('app').controller('companyCtrl',function($scope,$http,$state){
    $scope.text='公司详细';
    $http({
            method: 'GET',
            url: './data/w-' + $state.params.id + '.json',
        })
        .success(function (resp) {
            $scope.pos = resp;
    });
    
})