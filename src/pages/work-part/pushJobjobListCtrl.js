require('./foot.js');
require('./head.js');
require('./index.css')
angular
    .module('app')
    .controller('jobListCtrl', [
        '$scope',
        '$http',
        '$state',
        'loadInfoService',
        function ($scope, $http, $state, loadInfoService) {
            var comInfo = JSON.parse(sessionStorage.getItem('comInfo'));
            $scope.items = [];
            var num = 0;
            window.onscroll= function () {
                var bot = 50; //bot是底部距离的高度
                if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                   //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
                    //我们需要去异步加载数据了
                    num += 1;
                    setTimeout(function(){loadList(num)} , 1000);
                }
            }

            
            var loadList = function (num) {
                loadInfoService.loadWorkList({
                    comId: comInfo.comId,
                    page: num
                }, (resp) => {
                    if (resp.stasus == 1) {
                        for (var i = 0; i < resp.msg.length; i++) {
                            $scope
                                .items
                                .push(resp.msg[i]);
                        }

                    }
                })
            }
            loadList(num);

            // var txts = $('.wra').html(); txts=txts. $('.wra').html(txts);
        }
    ]);