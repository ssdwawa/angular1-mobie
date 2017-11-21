require('./sea.css');
angular
    .module('app')
    .directive('seaHead', [function () {
            return {
                restrict: 'A',
                templateUrl: 'view/search/search-head.html',
                link: function ($scope) {
                    angular
                        .element("#keyword")
                        .on('keypress', function (e) {
                            var keycode = e.keyCode;
                            var searchName = $(this).val();
                            if (keycode == '13') {
                                e.preventDefault();
                               $scope.search()
                            }
                        })

                }
            }
        }
    ])