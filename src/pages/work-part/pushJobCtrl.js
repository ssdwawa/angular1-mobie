require('./foot.js');
require('./head.js');
require('./index.css')
angular
    .module('app')
    .controller('pushJobCtrl', [
        '$scope',
        '$http',
        '$state',
        function ($scope, $http,$state) {
            $scope.cogm='';
            $scope.coAdd='';
            $scope.coXz='';
            $scope.coName='';
            $scope.coSta='';
            $scope.title='发布新职位'; 
            $state.go('pushJob.newjob')
        }
    ]);