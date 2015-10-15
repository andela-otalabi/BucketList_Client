var app = angular.module('bucketlistApp',['ngRoute']);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'app/partials/bucketlists.html',
    controller: 'bucketListCtrl'
  })
  .when('/bucketlists', {
    templateUrl: 'app/partials/createBucketlist.html',
    controller: 'bucketListCtrl'
  })
  .when('/user', {
    templateUrl: 'app/partials/addUser.html',
    controller: 'userCtrl'
  })
  .when('/login', {
    templateUrl: 'app/partials/loginUser.html',
    controller: 'userCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

}]);