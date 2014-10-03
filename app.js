
angular
  .module('MainApp', [
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
  .value('displayDensity', 'cozy')
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
            templateUrl: 'home/home.html'
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
  });
