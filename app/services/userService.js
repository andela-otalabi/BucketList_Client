app.factory('User', function($http) {
  return {
    register: function(userDetails) {
      return $http({
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: userDetails,
        url: 'http://kickmylist.herokuapp.com/api/v1/users'
      });
    },
    login: function(loginDetails) {
      return $http({
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: loginDetails,
        url: 'http://kickmylist.herokuapp.com/api/v1/auth/login'
      });
    },
    logout: function(authToken) {
      return $http({
        method: 'GET',
        url: 'http://kickmylist.herokuapp.com/api/v1/auth/logout?token=' + authToken
      })
    }
  };
})