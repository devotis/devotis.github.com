'use strict';

/* App Module */

angular.module('site', ['$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/',        {templateUrl: 'partials/home.html',   controller: SiteCtrl}).
      when('/about',   {templateUrl: 'partials/about.html',   controller: SiteCtrl}).
      when('/klanten', {templateUrl: 'partials/klanten.html', controller: SiteCtrl}).
      otherwise({redirectTo: '/'});
}]);
