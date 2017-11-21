require('./foot.js');
require('./head.js');
require('./index.css');
angular
    .module('app')
    .controller('mostpageCtrl', [
        '$scope',
        '$http',
        function ($scope, $http ,$state) {
           $scope.title='投递信息'
        }
    ]);