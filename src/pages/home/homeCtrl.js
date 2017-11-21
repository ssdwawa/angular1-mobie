require('./index.css')
angular
    .module('app')
    .controller('homeCtrl', function ($scope, $http, $state, $rootScope, loadInfoService) {
        $scope.value = sessionStorage.getItem('userName');
        var comInfo={
            comName:'',
            comId:'',
            comImg:''
        }
        $scope.toLogin = function () {
            $http
                .post('/users/login', {
                    userName: $scope.userName,
                    userPwd: $scope.userPwd
                })
                .success(function (resp) {
                    if (resp.staus == 1 && resp.msg.length > 0) {
                        if (resp.msg[0].wat == 'person') {
                            $state.go('main');
                        } else if (resp.msg[0].wat == 'company') {
                            sessionStorage.removeItem('userName');
                            sessionStorage.setItem('userName', $scope.userName);
                            loadInfoService.getCompanyInfo({userName:$scope.userName}, (resp) => {
                                if (resp.stasus == 1) {
                                    console.log(resp.msg[0]);
                                    comInfo.comName = resp.msg[0].companyName,
                                    comInfo.comId = resp.msg[0].companyId,
                                    comInfo.comImg = resp.msg[0].imageUrl;
                                    sessionStorage.removeItem('comInfo');
                                    sessionStorage.setItem('comInfo',JSON.stringify(comInfo));
                                } else {}
                            });
                            $state.go('mostPage');
                        }
                    } else {
                        alert('账号密码错误')
                    }
                })
        }

    })