require('./foot.js');
require('./head.js');
require('./index.css');

angular
    .module('app')
    .controller('pageInfoCtrl', [
        '$scope',
        '$http',
        'loadInfoService',
        function ($scope, $http, loadInfoService) {
            $scope.cogm = '';
            $scope.title = '公司信息';
            $scope.value = sessionStorage.getItem('userName');
            var value = {
                userName: $scope.value
            };
            loadInfoService.getCompanyInfo(value, (resp) => {
                if (resp.stasus == 1) {
                    $scope.coName = resp.msg[0].companyName,
                    $scope.coAdd = resp.msg[0].address,
                    $scope.coXz = resp.msg[0].ins,
                    $scope.coSta = resp.msg[0].state,
                    $scope.cogm = resp.msg[0].member;
                    $scope.comId = resp.msg[0].companyId;
                    $scope.imageUrl=resp.msg[0].imageUrl;
                    $('#newImg').attr('src', `http://localhost:8001${resp.msg[0].imageUrl}`)
                } else {}
            });

            $scope.comfrimSumbit = function () {
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
                formData.append("co-comId", $scope.comId);
                formData.append("co-oldImg", $scope.imageUrl);
                console.log(formData)

                $.ajax({
                    type: 'POST',
                    url: '/users/updateCom',
                    data: formData,
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (resp) {
                        if (resp.msg == 'ok') {
                           alert('修改成功')
                        }
                    },
                    error: function (err) {
                        console.log(err.message);
                    }
                })
            };

            $scope.imgPreview = function (fileDom) {
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
                reader.onload = function (e) {
                    //获取图片dom
                    var img = document.getElementById("newImg");
                    img.src = e.target.result;
                };

            }
            $('#newImg').click(function () {
                $('#one-input').trigger('click')
            })
        }
    ]);