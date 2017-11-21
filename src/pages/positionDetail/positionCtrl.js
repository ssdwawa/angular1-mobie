require('./position.css');
require('pages/positionDetail/head/headBar.js');
require('pages/positionDetail/positionInfo/index.js');
require('pages/positionDetail/company/index.js');
angular.module('app')
.controller('positionCtrl', function ($scope, $q,$http, $state) {
    $scope.text = '职位详情';
    $scope.isLogin = false;
    var def = $q.defer();
    function getPosition() {   
        $http({
            method: 'GET',
            url: './data/w-' + $state.params.id + '.json',
        })
        .success(function (resp) {
            $scope.pos = resp;
            def.resolve(resp);
        });
        return def.promise;
    };
    function getCompany(id){
        $http({
            method: 'GET',
            url: './data/w-' + id + '.json',
        })
        .success(function (resp) {
            console.log(resp)
        });
        return def.promise;
    };
    getPosition().then(function(resp){
        getCompany(resp.id)
    })
});