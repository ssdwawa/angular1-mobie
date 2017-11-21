require('./head.css')

angular.module('app').directive('appHead',[function(){
    return {
        restrict:'A',
        templateUrl:'view/main/head.html'
    }
}])