app.controller('userCtrl', ['$scope', 'User', function($scope, User) {

  $scope.createUser = function() {
    var userdetails = {
      name: $scope.name,
      email: $scope.email,
      password: $scope.password,
      password: $scope.confirm_password
    };


   User.register(userDetails).success(function(response) {
      var res = response.message;
      $scope.response = res;
      console.log("response", )
      }

    }).error(function(error) {});
  };


    app.controller('bucketListCtrl', ['$scope', 'BucketList', function($scope, BucketList){
  BucketList.allBucketLists().success(function(data){
    $scope.bucketLists = data.bucketlists;
    console.log("data", data.bucketlists);
  })
  
}])
