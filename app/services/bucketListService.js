app.factory('BucketList', function($http){
  return {
    allBucketLists: function(){
      return $http.get('http://localhost:3000/api/v1/bucketlists');
    },
    createBucketList: function(listDetails, authToken){
      return $http({
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: listDetails,
        url: 'http://localhost:3000/api/v1/bucketlists?token=' + authToken
      });
    },
    getABucketList: function(bucketListId, authToken){
      return $http.get('http://localhost:3000/api/v1/bucketlists/'+ bucketListId + '?token=' + authToken);
    }
  };
}) 