/**
 * Created by hxsd on 2016/12/7.
 */
$(function(){
    //从title下找到div，绑上事件
    $(".title").find("div").on("click",function(){
        //发牌照，找索引值
        var _this=$(this).index();
        //让所有div除掉class
        $(".title").find("div").removeClass("current");
        //让自己加上class
        $(this).addClass("current");
        //让所有的div隐藏
        $(".desc").hide();
        //让和desc对应的div fadeIn
        $(".desc").eq(_this).fadeIn()
    })
})
angular.module("myapp")
    .controller("buyCtrl", function ($scope, $stateParams, dateFactory,cartShop) {
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var title = $stateParams.title;
        var data = dateFactory.query();
        angular.forEach(data.productList, function (item) {
            if (item.title == title) {
                $scope.product = item;
                return false;   // 中断forEach循环 <=> break
            }
        });
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