angular.module('App', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'template/index.html',
      controller: 'IndexController'
    })
    .when('/sample01', {
      templateUrl: 'template/sample01.html',
      controller: 'SampleController'
    })
}]);
