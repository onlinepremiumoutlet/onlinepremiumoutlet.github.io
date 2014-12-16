'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var storeApp = angular.module('AngularStore',['ngRoute']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
//        controller: storeController
      }).
//      when('/products/:productSku', {
//        templateUrl: 'partials/product.htm',
//        controller: storeController
//      }).
//      when('/cart', {
//        templateUrl: 'partials/shoppingCart.htm',
//        controller: storeController
//      }).
      when('/sales', {
        templateUrl: 'views/sales.html',
      }).
      when('/men', {
        templateUrl: 'views/men.html',
      }).
      when('/women', {
        templateUrl: 'views/women.html',
      }).
      when('/contact', {
        templateUrl: 'views/contact.html',
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);
