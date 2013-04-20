'use strict';

/* Controllers */

function SiteCtrl($scope, $window, $location) {
  console.log(arguments);
  $scope.$on('$viewContentLoaded', function(event) {
    $window._gaq.push(['_trackPageview', $location.path()]);
  });
}

