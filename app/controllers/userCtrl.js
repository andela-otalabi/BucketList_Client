app.controller('userCtrl', ['$scope', 'User', '$cookies', function($scope, User, $cookies) {

  $scope.createUser = function() {
    var userDetails = {
      name: $scope.name,
      email: $scope.email,
      password: $scope.password,
      password_confirmation: $scope.confirm_password
    };
    User.register(userDetails).success(function(response) {
      var res = response;
      $scope.message = res.message;
    })
  };

  $scope.Login = function() {
    var loginDetails = {
      email: $scope.email.toLowerCase(),
      password: $scope.password
    };
    User.login(loginDetails).success(function(res) {
      if (res.success = true) {
        console.log(res);
        $cookies.put('token', JSON.stringify(res.token));
      }
    })
  };

}]);