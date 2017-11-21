require('./index.css')
angular.module('app').controller('regCtrl',function($scope,$http,$state){
    $scope.reg=function(){
        var choiceWat=''
        if(!$scope.acc){
            alert('账号不能为空')
            return false;
        }
        else if($scope.pass!=$scope.comPass){
            alert('密码不同')
            return false;
        }
        var wat = document.getElementsByName('wat');
        for(var i=0;i<wat.length;i++){
            if(wat[i].checked==true){
                choiceWat=wat[i].value
            }
        }
        $http({
            method:'post', 
            url:'/users/addUser',
            data:{
                userName:$scope.acc,
                pass:$scope.pass,
                wat:choiceWat
            }
        }).then(
            (resp)=>{
                if(resp.data.stasus==1){
                    alert('注册成功');
                    sessionStorage.removeItem('userName'); 
                    sessionStorage.setItem('userName', $scope.acc); 
                    (choiceWat=='person')? $state.go('main'):$state.go('addCompany')
                }
            }
        )
    }
    $scope.checkeUsername=function(){
       $http({
        method:'post', 
        url:'/users/check',
        data:{
            userName:$scope.acc
        }
       }).then((resp)=>{
        if(resp.data.stasus==1){
            alert('账号已经被注册');
            $scope.acc='';
        }
       })
    }
})