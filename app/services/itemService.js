app.factory('Item', function($http){
  return {
    bucketListItems: function(bucketlist_id){
      return $http.get('http://kickmylist.herokuapp.com/api/v1/bucketlists/:bucketlist_id/items');
    },
    addItems: function(bucketlist_id){
      return $http.post('http://kickmylist.herokuapp.com/api/v1/bucketlists/:bucketlist_id/items')
    }
  };
})