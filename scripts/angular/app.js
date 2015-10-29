/**
 * Created by Venkat on 10/20/2015.
 */
    var  myApp = angular.module("myApp", ['ngRoute'
    ]).config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'homeCtrl'
                }).
                when('/about', {
                    templateUrl: 'views/about.html'//cv,
                    //controller: 'contactCtrl'
                }).
                when('/contact', {
                    templateUrl: 'views/contact.html',
                    controller: 'contactCtrl'
                }).
                when('/customers', {
                    templateUrl: 'views/customers.html'
                    //controller: 'PhoneDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);



