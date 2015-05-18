'use strict';

/* App Module */

angular.module('site', ['$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
      
  var p = location.pathname;
  p = 'partials'+(p == '/' ? '/index.html' : p);
  
  $routeProvider.
      when('/',                            {templateUrl: p+'/home.html',    controller: SiteCtrl}).
      //Services
      when('/full-stack-development',      {templateUrl: p+'/full-stack-development.html',   controller: SiteCtrl}).
      when('/scrum',                       {templateUrl: p+'/scrum.html',   controller: SiteCtrl}).
      when('/google-apps',                 {templateUrl: p+'/google-apps.html',   controller: SiteCtrl}).
      //Company
      when('/news',                        {templateUrl: p+'/news.html',   controller: SiteCtrl}).
      when('/customers',                   {templateUrl: p+'/customers.html', controller: SiteCtrl}).
      when('/contact',                     {templateUrl: p+'/about-devotis.html',   controller: SiteCtrl}).
      when('/terms-and-conditions',        {templateUrl: p+'/terms-and-conditions.html',   controller: SiteCtrl}).
      when('/about/devotis',               {templateUrl: p+'/about-devotis.html',   controller: SiteCtrl}).
      when('/about/christiaan-westerbeek', {templateUrl: p+'/about-chris.html',   controller: SiteCtrl}).
      //Old stuff
      when('/services/stoic',                  {templateUrl: p+'/stoic.html',   controller: SiteCtrl}).
      when('/services/clang',                  {templateUrl: p+'/clang.html',   controller: SiteCtrl}).
      when('/services/google-apps',            {templateUrl: p+'/google-apps.html',   controller: SiteCtrl}).
      when('/services/javascript-development', {templateUrl: p+'/javascript-development.html',   controller: SiteCtrl}).
      when('/services/sencha',                 {templateUrl: p+'/javascript-development.html',   controller: SiteCtrl}).
      when('/services/domain-and-hosting',     {templateUrl: p+'/domain-and-hosting.html',   controller: SiteCtrl}).
      when('/news-old',                        {templateUrl: p+'/news-old.html',   controller: SiteCtrl}).
      when('/herman-vriendschapskoek',         {templateUrl: p+'/herman-vriendschapskoek.html',   controller: SiteCtrl}).
      otherwise({redirectTo: '/'});
}]);
