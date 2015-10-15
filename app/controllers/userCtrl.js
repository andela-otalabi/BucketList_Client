app.controller('userCtrl', ['$scope', 'User', function($scope, User) {

  $scope.createUser = function() {
    var userdetails = {
      name: $scope.name,
      email: $scope.email,
      password: $scope.password,
      password: $scope.confirm_password
    };


    User.register(userDetails).success(function(response) {
      var res = response;
      $scope.token = res.token;
      $scope.message = res.message;
      console.log("response", res.token, res.message);
    }
  };
  
}])