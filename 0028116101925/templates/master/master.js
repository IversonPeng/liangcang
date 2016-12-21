/**
 * Created by hxsd on 2016/11/28.
 */
angular.module("myapp").controller("mastersCtrl", function ($scope, $http) {
    // 创建一些scope变量
    $scope.page = 0;    // 用来保存当前请求的页码
    $scope.total = 2;   // 用来保存总页数
    $scope.masters = [];
    // 加载杂志的方法
    $scope.getMasters= function () {
        $scope.page++;  // 页数++
        var url = "master.json";   // 请求的url
        $http.get(url)
            .success(function (response) {
                angular.forEach(response.masters, function (master) {
                    $scope.masters.push(master);
                });
                $scope.total = response.masters;
            })
            .finally(function () {
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };
    $scope.getMasters();    // 加载时，从API加载第一页杂志数据
})