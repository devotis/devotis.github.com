'use strict';

/* Controllers */

function SiteCtrl($scope, $http) {
  console.log(arguments);
  $scope.$on('$viewContentLoaded', function(event) {
    $window._gaq.push(['_trackPageview', $location.path()]);
  });
}

