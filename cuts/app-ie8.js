
angular
  .module('MainApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ui.utils',
    'ui.bootstrap',
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
            templateUrl: 'home/home.html'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          'aside': {
            template: '<h3>About Aside</h3>'
          },
          'main': {
            template: '<h3>About Main</h3>'
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
        url: "/userLogin",
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
            template: '<h3>Settings Aside</h3>'
          },
          'main': {
            templateUrl: 'settings/settings.html'
          }
        }
      })
      .state('themes', {
        url: "/themes",
        views: {
          'aside': {
            template: '<h3>Themes Aside</h3>'
          },
          'main': {
            template: '<h3>Themes Main</h3>'
          }
        }
      });

    /* Add New States Above */
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("/error?code=404");
  })
  // Create a 'user defaults' service
  // http://stackoverflow.com/questions/13769732/angular-js-init-ng-model-from-default-values/17823590#17823590
  // .value("userSettings", /* your server-side JSON here */);
  .directive('formAutofillFix', function() {
    return function(scope, elem, attrs) {
      // Fixes Chrome bug: https://groups.google.com/forum/#!topic/angular/6NlucSskQjY
      elem.prop('method', 'POST');
      // Fix autofill issues where Angular doesn't know about autofilled inputs
      if(attrs.ngSubmit) {
        setTimeout(function() {
          elem.unbind('submit').submit(function(e) {
            e.preventDefault();
            elem.find('input, textarea, select').trigger('input').trigger('change').trigger('keydown');
            scope.$apply(attrs.ngSubmit);
          });
        }, 0);
      }
    };
  });
