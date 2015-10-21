app.controller('IndexCtrl', ['$scope', '$cookies', '$rootScope', 'User', '$location', function($scope, $cookies, $rootScope, User, $location) {

  if ($cookies.get('token')) {
    $rootScope.currentUser = true;
  }

  $scope.logout = function() {
    var authToken = JSON.parse($cookies.get('token'));
    User.logout(authToken).success(function(res) {
      if (res.success = true) {
        $cookies.remove('token');
        $location.path('/');
      }
    })
  };

}]);