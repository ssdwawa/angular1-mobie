require('./foot.css')
angular.module('app').directive('appFoot',[function(){
    return{
        restrict:'A',
        templateUrl:'view/main/foot.html'
    }
}])