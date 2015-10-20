app.controller('bucketListCtrl', ['$scope', 'BucketList', '$cookies', function($scope, BucketList, $cookies) {
  BucketList.allBucketLists().success(function(data) {
    $scope.bucketLists = data.bucketlists;
    console.log("data", data.bucketlists);
  })

  $scope.addBucketList = function() {
    var listDetails = {
      name: $scope.bucketlistName
    };

    console.log(listDetails)
    var authToken = JSON.parse($cookies.get('token'));

    BucketList.createBucketList(listDetails, authToken).success(function(response) {
      var res = response;
      console.log("response", res);
    })
  };
 

}]);
