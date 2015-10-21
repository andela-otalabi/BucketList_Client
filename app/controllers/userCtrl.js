app.controller('userCtrl', ['$scope', 'User', '$cookies', '$location', function($scope, User, $cookies, $location) {

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
        if (res.message == 'You have successfully logged in'){
          $scope.responseMessage = res.message;
          $cookies.put('token', res.token);
          $location.path('/bucketlists');
        }else {
        $scope.responseMessage = 'Incorrect username or password';
        }
      }
    })
  };

}]);