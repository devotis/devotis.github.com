'use strict';

/* Controllers */

function SiteCtrl($scope, $window, $location) {
  $scope.$on('$viewContentLoaded', function(event) {
    $window._gaq.push(['_trackPageview', $location.path()]);
  });
}

