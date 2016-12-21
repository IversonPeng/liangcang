/**
 * Created by hxsd on 2016/11/29.
 */
/*
angular.module("myapp").controller("detailsCtrl", function ($scope, $http,$ionicViewSwitcher) {
    // 创建一些scope变量
    $scope.page = 0;    // 用来保存当前请求的页码
    $scope.total = 2;   // 用来保存总页数
    $scope.details = [];
    // 加载杂志的方法
    $scope.getDetails= function () {
        $scope.page++;  // 页数++
        var url = "detail.json";   // 请求的url
        $http.get(url)
            .success(function (response) {
                angular.forEach(response.details, function (detail) {
                    $scope.details.push(detail);
                });
                $scope.total = response.details;
            })
            .finally(function () {
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };
    // 跳转
    $scope.toDetail = function(product){
        $state.go("detail",{id:"1001",name:product.name});
        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };
    $scope.getDetails();    // 加载时，从API加载第一页杂志数据
})*/
angular.module("myapp").controller("detailsCtrl", function ($scope,$state,$ionicViewSwitcher,dateFactory,cartShop) {
    $scope.data = dateFactory.query();
    // 跳转
    $scope.tobuy = function(product){
        $state.go("buy",{id:"1001",title:product.title});
        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };
    // 加入购物车
    $scope.add = function(product){
        // 调用购物车对象的add方法
        cartShop.add(product);
        //阻止冒泡事件
        window.event? window.event.cancelBubble = true : e.stopPropagation()
    };

    // 首先拿到购物车中的所有商品
    var cartDate = cartShop.findAll();

    // 计算所有商品的部数量
    $scope.totalNumber = function(){
        var total = 0;
        angular.forEach(cartDate,function(item){
            total += item.number;
        });
        return total;
    };
});
