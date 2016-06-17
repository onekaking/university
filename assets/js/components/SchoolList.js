angular.module('educationApp')
.controller('SchoolListController', function($scope, SchoolService) {
  SchoolService.getList().then(function(res) {
    console.log(res);
  });
});
