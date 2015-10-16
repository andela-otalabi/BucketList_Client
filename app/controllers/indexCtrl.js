app.controller('IndexCtrl', ['$scope', '$cookies', '$rootScope', function($scope, $cookies, $rootScope) {

  if ($cookies.get('token')) {
    $rootScope.currentUser = true;
  }
  
  $scope.logout = function() {
    $cookies.get('token');
    $cookies.remove('token');   
  };
  
}]);