'use strict';

/* App Module */

angular.module('site', ['$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
      
  var p = location.pathname;
  p = 'partials'+(p == '/' ? '/index.html' : p);
  
  $routeProvider.
      when('/',                                {templateUrl: p+'/home.html',    controller: SiteCtrl}).
      when('/services/stoic',                  {templateUrl: p+'/stoic.html',   controller: SiteCtrl}).
      when('/services/clang',                  {templateUrl: p+'/clang.html',   controller: SiteCtrl}).
      when('/services/google-apps',            {templateUrl: p+'/google-apps.html',   controller: SiteCtrl}).
      when('/services/javascript-development', {templateUrl: p+'/javascript-development.html',   controller: SiteCtrl}).
      when('/services/sencha',                 {templateUrl: p+'/javascript-development.html',   controller: SiteCtrl}).
      when('/services/domain-and-hosting',     {templateUrl: p+'/domain-and-hosting.html',   controller: SiteCtrl}).
      when('/about/devotis',                   {templateUrl: p+'/about-devotis.html',   controller: SiteCtrl}).
      when('/about/christiaan-westerbeek',     {templateUrl: p+'/about-chris.html',   controller: SiteCtrl}).
      when('/news',                            {templateUrl: p+'/news.html',   controller: SiteCtrl}).
      when('/news-old',                        {templateUrl: p+'/news-old.html',   controller: SiteCtrl}).
      when('/customers',                       {templateUrl: p+'/customers.html', controller: SiteCtrl}).
      when('/contact',                         {templateUrl: p+'/about-devotis.html',   controller: SiteCtrl}).
      otherwise({redirectTo: p});
}]);
