app.controller('bucketListCtrl', ['$scope', 'BucketList', '$cookies', function($scope, BucketList, $cookies) {
  BucketList.allBucketLists().success(function(data) {
    $scope.bucketLists = data.bucketlists;
  })

  $scope.addBucketList = function() {
    var listDetails = {
      name: $scope.bucketlistName
    };
    var authToken = JSON.parse($cookies.get('token'));

    BucketList.createBucketList(listDetails, authToken).success(function(res) {
      $scope.newBucketlist = res.bucketlist.name;
      $scope.bucketListOwner = res.bucketlist.created_by;
    })
  };
  
}]).controller('bucketCtrl', ['$scope', 'BucketList', '$cookies', '$routeParams', function($scope, BucketList, $cookies, $routeParams){
    var bucketListId = $routeParams.id;
    var authToken = $cookies.get('token');
    BucketList.getABucketList(bucketListId, authToken).success(function(res){ 
      console.log(res);
      $scope.getBucketList = res
    })

 }]);