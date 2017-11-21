require('./positionList.css');

angular.module('app').directive('appList',[function(){
    return{
        restrict:'A',
        templateUrl:'view/main/positionList.html'
    }
}])