var app = angular.module('bucketlistApp', ['ngRoute', 'ngCookies', ]);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header containing XMLHttpRequest used to identify ajax call 
  //that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider
  .when('/', {
    templateUrl: 'app/partials/bucketlists.html',
    controller: 'bucketListCtrl'
  })
  .when('/bucketlists', {
    templateUrl: 'app/partials/createBucketlist.html',
    controller: 'bucketListCtrl'
  })
  .when('/showBucketList/:id', {
    templateUrl: 'app/partials/bucketList.html',
    controller: 'bucketCtrl'
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