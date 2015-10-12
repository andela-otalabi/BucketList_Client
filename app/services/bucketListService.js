app.factory('BucketList', function($http){
  return {
    allBucketLists: function(){
      return $http.get('http://kickmylist.herokuapp.com/api/v1/bucketlists');
    },
    createBucketList: function(listDetails){
      return $http.post('http://kickmylist.herokuapp.com/api/v1/bucketlists', listDetails)
    }
  };
})