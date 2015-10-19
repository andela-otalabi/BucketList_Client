app.controller('IndexCtrl', ['$scope', '$cookies', '$rootScope', 'User', function($scope, $cookies, $rootScope, User) {

  if ($cookies.get('token')) {
    $rootScope.currentUser = true;
  }

  $scope.logout = function() {
    var authToken = JSON.parse($cookies.get('token'));
    User.logout(authToken).success(function(res) {
      if (res.success = true) {
        console.log(res);
        $cookies.remove('token');
      }
    })
  };

}]);