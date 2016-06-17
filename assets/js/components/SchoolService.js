var educationApp = angular.module('educationApp')
educationApp.service('SchoolService', ['$http', 'SchoolUrl', function($http, SchoolUrl) {
  return {
    getList: function() {
      console.log(SchoolUrl.list);
      return $http.get(SchoolUrl.list);
    }
  }
}]);
