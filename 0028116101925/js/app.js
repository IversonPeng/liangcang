/**
 * Created by hxsd on 2016/11/24.
 */
angular.module("marsService",[]);
var myapp=angular.module("myapp",["ionic","marsService"]);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("tour", {
            url: "/tour",
            templateUrl: "templates/tour/tour.html"
        })
        .state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"templates/tabs/tabs.html"
        })
        .state("tabs.store",{
            url:"/store",
            views:{"tab-store":{templateUrl:"templates/store/store.html"}}
        })
        .state("login",{
            url:"/login",
            templateUrl:"templates/login/login.html"
        })
        .state("detail",{
            url:"/detail",
            templateUrl:"templates/detail/detail.html",
            controller:"detailsCtrl"
        })
        .state("order",{
            url:"/order",
            templateUrl:"templates/order/order.html"
        })
        .state("book", {
            url: "/book?:id:title", // 路由传参
            templateUrl:"templates/book/book.html", controller: "bookCtrl"
        })
        .state("buy", {
            url: "/buy?:id:title", // 路由传参
            templateUrl:"templates/buy/buy.html", controller: "buyCtrl"
        })
        .state("checkOut",{
            url:"/checkOut",
            templateUrl:"templates/checkOut/checkOut.html",
            controller:"checkOutCtrl"
        })
        .state("tabs.notes",{
            url:"/notes",
            views:{"tab-notes":{templateUrl:"templates/notes/notes.html",controller:"notesCtrl"}}
        })
        .state("tabs.master",{
            url:"/master",
            views:{"tab-master":{templateUrl:"templates/master/master.html",controller:"mastersCtrl"}}
        })
        .state("tabs.personal",{
            url:"/personal",
            views:{"tab-personal":{templateUrl:"templates/personal/personal.html"}}
        });
    $urlRouterProvider.otherwise("/tour")
});
myapp.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("notes.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});
myapp.factory("dateFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("detail.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});