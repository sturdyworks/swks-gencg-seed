
angular
  .module('swksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ui.bootstrap',
    'ui.utils',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider
      .state('home', {
        url: "/",
        views: {
          'aside': {
            template: '<h3>Home Aside</h3>'
          },
          'main': {
            template: '<h3>Home Main</h3>'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          'aside': {
            template: '<h3>about.aside</h3>'
          },
          'main': {
            template: '<h3>about.main</h3>'
          }
        }
      })
      .state('contact', {
        url: "/contact",
        views: {
          'aside': {
            template: 'contact.aside'
          },
          'main': {
            template: 'contact.main'
          }
        }
      })
      .state('userLogin', {
        url: "/userlogin",
        views: {
          'aside': {
            template: 'userLogin.aside'
          },
          'main': {
            template: 'userLogin.main'
          }
        }
      })
      .state('settings', {
        url: "/settings",
        views: {
          'aside': {
            template: 'settings.aside'
          },
          'main': {
            template: 'settings.main'
          }
        }
      });

    /* Add New States Above */
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("/error?code=404");
  })
  .controller('swksCtrl', function ($scope, $stateParams) {
    'use strict';
    $scope.errorCode = $stateParams.code;
    $scope.data = [
      {name: "Chrome", percent:20},
      {name: "Firefox", percent:30},
      {name: "Safari", percent:60}
    ];
  })
  .run(function($rootScope) {
    'use strict';
    $rootScope.safeApply = function(fn) {
      var phase = $rootScope.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  });
