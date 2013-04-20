'use strict';

/* Controllers */

function SiteCtrl($scope, $window) {
  console.log(arguments);
  $scope.$on('$viewContentLoaded', function(event) {
    $window._gaq.push(['_trackPageview', $location.path()]);
  });
}

