app.controller('userCtrl', ['$scope', 'User', function($scope, User) {

  $scope.createUser = function() {
    var userDetails = {
      name: $scope.name,
      email: $scope.email,
      password: $scope.password,
      password_confirmation: $scope.confirm_password
    };
    console.log(userDetails);
    User.register(userDetails).success(function(response) {
      var res = response;
      $scope.message = res.message;
    })
  };

  $scope.Login = function() {
    var loginDetails = {
      email: $scope.email,
      password: $scope.password
    };
    User.login(loginDetails).success(function(res) {
        console.log("response", res);
    })
  };
  
}])