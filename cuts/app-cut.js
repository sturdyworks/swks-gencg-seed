
    /* generated via: yo cg-angular:partial settings */
    $stateProvider.state('settings', {
        url: '/settings',
        templateUrl: 'settings/settings.html'
    });

    /* Eliminated since setting menu has no view */
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


  /* Example from: 
  .config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $stateProvider
      .state('home', {
        url: "/",
        views: {
          'aside': {
            templateUrl: function () {
              return Modernizr.touch ?
                'views/main.touch.html' :
                'views/main.no-touch.html';
            }
          },
          'main': {
            template: '<h3>Home Main</h3>'
          }
        }
      })
