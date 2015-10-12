app.factory('User', function($http){
  return {
    register: function(userDetails){
      return $http.post('http://kickmylist.herokuapp.com/api/v1/users', userDetails);
    },
    login: function(loginDetails){
      return $http.post('http://kickmylist.herokuapp.com/api/v1/auth/login', loginDetails);
    },
    logout: function(){
      return $http.post('http://kickmylist.herokuapp.com/api/v1/users');
    }
  };
})