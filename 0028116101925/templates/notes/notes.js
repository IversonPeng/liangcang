/**
 * Created by hxsd on 2016/11/28.
 */
angular.module("myapp").controller("notesCtrl", function ($scope,$state,$ionicViewSwitcher,dataFactory) {
    $scope.data = dataFactory.query();
    // 跳转
    $scope.toBook = function(product){
        $state.go("book",{id:"1001",title:product.title});
        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };
});