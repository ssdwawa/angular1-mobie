require('./foot.js');
require('./head.js');
require('./index.css')
angular
    .module('app')
    .controller('newJobCtrl', [
        '$scope',
        '$http',
        '$state',
        'loadInfoService',
        function ($scope, $http, $state, loadInfoService) {
            sessionStorage.setItem('title', '发布新职位');
            var cominfo=JSON.parse(sessionStorage.getItem('comInfo'));
            console.log(cominfo);
            $scope.workComId = '';
            $scope.workComImg = '';
            $scope.comSub = function () {
                loadInfoService.addWork({
                    workName: $scope.workName,
                    workXz: $scope.workXz,
                    workSalra: $scope.workSalar,
                    workAcc: $scope.workAdd,
                    workReq: $scope.workReq,
                    workComId: cominfo.comId,
                    workComImg: `http://localhost:8001${cominfo.comImg}`
                }, (resp) => {
                    if (resp.stasus == 1) {
                  alert('添加成功')
                        
                    } else {}
                })
            };
        }
    ]);