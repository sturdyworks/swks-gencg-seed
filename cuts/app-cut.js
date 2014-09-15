
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
