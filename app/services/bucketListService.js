app.factory('BucketList', function($http){
  return {
    allBucketLists: function(){
      return $http.get('http://kickmylist.herokuapp.com/api/v1/bucketlists');
    },
    createBucketList: function(listDetails){
      return $http({
        method: 'POST',
        url: 'http://kickmylist.herokuapp.com/api/v1/bucketlists',
        headers: { 'Authorization': listDetails.token},
        data: listDetails
      });
    },
  };
})