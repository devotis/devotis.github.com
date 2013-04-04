'use strict';

/* App Module */

angular.module('site', ['$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/',                                {templateUrl: 'partials/en/home.html',    controller: SiteCtrl}).
      when('/services/stoic',                  {templateUrl: 'partials/en/stoic.html',   controller: SiteCtrl}).
      when('/services/clang',                  {templateUrl: 'partials/en/clang.html',   controller: SiteCtrl}).
      when('/services/google-apps',            {templateUrl: 'partials/en/google-apps.html',   controller: SiteCtrl}).
      when('/services/javascript-development', {templateUrl: 'partials/en/javascript-development.html',   controller: SiteCtrl}).
      when('/services/domain-and-hosting',     {templateUrl: 'partials/en/domain-and-hosting.html',   controller: SiteCtrl}).
      when('/about/devotis',                   {templateUrl: 'partials/en/about-devotis.html',   controller: SiteCtrl}).
      when('/about/christiaan-westerbeek',     {templateUrl: 'partials/en/about-chris.html',   controller: SiteCtrl}).
      when('/blog',                            {templateUrl: 'partials/en/blog.html',   controller: SiteCtrl}).
      when('/customers',                       {templateUrl: 'partials/en/customers.html', controller: SiteCtrl}).
      when('/contact',                         {templateUrl: 'partials/en/contact.html',   controller: SiteCtrl}).
      otherwise({redirectTo: '/'});
}]);
