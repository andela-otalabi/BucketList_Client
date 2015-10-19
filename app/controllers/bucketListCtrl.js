app.controller('bucketListCtrl', ['$scope', 'BucketList', function($scope, BucketList) {
  BucketList.allBucketLists().success(function(data) {
    $scope.bucketLists = data.bucketlists;
    console.log("data", data.bucketlists);
  })

}]);
