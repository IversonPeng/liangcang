/**
 * Created by hxsd on 2016/11/30.
 */
angular.module("myapp")
    .controller("bookCtrl", function ($scope, $stateParams, dataFactory) {
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var title = $stateParams.title;
        var data = dataFactory.query();
        angular.forEach(data.productList, function (item) {
            if (item.title == title) {
                $scope.product = item;
                return false;   // 中断forEach循环 <=> break
            }
        });
    });