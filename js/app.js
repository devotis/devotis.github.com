'use strict';

/* App Module */

angular.module('site', ['$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
      
  var p = location.pathname;
  if (p=='/') {
      p='/index.html';
  }
  
  
  $routeProvider.
      when('/',                                {templateUrl: 'partials'+p+'/home.html',    controller: SiteCtrl}).
      when('/services/stoic',                  {templateUrl: 'partials'+p+'/stoic.html',   controller: SiteCtrl}).
      when('/services/clang',                  {templateUrl: 'partials'+p+'/clang.html',   controller: SiteCtrl}).
      when('/services/google-apps',            {templateUrl: 'partials'+p+'/google-apps.html',   controller: SiteCtrl}).
      when('/services/javascript-development', {templateUrl: 'partials'+p+'/javascript-development.html',   controller: SiteCtrl}).
      when('/services/sencha',                 {templateUrl: 'partials'+p+'/javascript-development.html',   controller: SiteCtrl}).
      when('/services/domain-and-hosting',     {templateUrl: 'partials'+p+'/domain-and-hosting.html',   controller: SiteCtrl}).
      when('/about/devotis',                   {templateUrl: 'partials'+p+'/about-devotis.html',   controller: SiteCtrl}).
      when('/about/christiaan-westerbeek',     {templateUrl: 'partials'+p+'/about-chris.html',   controller: SiteCtrl}).
      when('/news',                            {templateUrl: 'partials'+p+'/news.html',   controller: SiteCtrl}).
      when('/news-old',                        {templateUrl: 'partials'+p+'/news-old.html',   controller: SiteCtrl}).
      when('/customers',                       {templateUrl: 'partials'+p+'/customers.html', controller: SiteCtrl}).
      when('/contact',                         {templateUrl: 'partials'+p+'/about-devotis.html',   controller: SiteCtrl}).
      otherwise({redirectTo: p});
}]);
