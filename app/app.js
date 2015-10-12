var app = angular.module('bucketlistApp',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'app/partials/bucketlists.html',
    controller: 'bucketListCtrl'
  }).when('/bucketlists', {
    templateUrl: 'partials/bucketlists.html',
    controller: 'bucketListCtrl'
  }).
  otherwise({
    redirectTo: '/app'
  });
});