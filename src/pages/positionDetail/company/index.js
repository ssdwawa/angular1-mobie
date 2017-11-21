require('./index.css');
angular.module('app').directive('appCompany',[function(){
    return{
        restrict:'A',
        templateUrl:'view/position/company.html',
    }
}])