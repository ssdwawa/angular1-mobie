require('./foot.js');
require('./head.js');
require('./index.css')
angular
    .module('app')
    .controller('workPartCtrl', [
        '$scope',
        '$http',
        '$state',
        function ($scope, $http,$state) {
            $scope.cogm='';
            $scope.coAdd='';
            $scope.coXz='';
            $scope.coName='';
            $scope.coSta='';
            $scope.title='添加企业信息';
            $scope.value =sessionStorage.getItem('userName');
            $scope.handle = function () {
                let file = document
                    .getElementById("one-input")
                    .files[0];
                let formData = new FormData();
                formData.append("co-name", $scope.coName);
                formData.append("co-add", $scope.coAdd);
                formData.append("co-xz", $scope.coXz);
                formData.append("co-sta", $scope.coSta);
                formData.append("co-gm", $scope.cogm);
                formData.append("co-acc", $scope.value);
                formData.append("avatar", file);
                console.log(formData)
                
                $.ajax({
                    type: 'POST',
                    url: '/users/profile',
                    data: formData,
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (resp) {
                        if(resp.msg=='ok'){
                            $state.go('mostPage')
                        }
                    },
                    error: function (err) {
                        console.log(err.message);
                    }
                })
            };
            $scope.imgPreview= function (fileDom){
                //判断是否支持FileReader
                if (window.FileReader) {
                    var reader = new FileReader();
                } else {
                    alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
                }
        
                //获取文件
                var file = fileDom[0];
                var imageType = /^image\//;
                //是否是图片
                if (!imageType.test(file.type)) {
                    alert("请选择图片！");
                    return;
                }
                reader.readAsDataURL(file);
                //读取完成
                reader.onload = function(e) {
                    //获取图片dom
                    var img = document.getElementById("newImg");
                    img.src = e.target.result;
                };
                
            }
            $('#newImg').click(function(){
                $('#one-input').trigger('click')
            })
        }
    ]);