/**
 * @ngdoc function
 * @name MainApp.controller:MainController
 * @description
 * # MainController
 * Controller of the MainApp
 */
angular.module('MainApp')
  .controller('MainController', function ($scope, $stateParams, $log) {
    'use strict';

    $log.log($scope);
    $log.log($stateParams);
  })
  .run(function($rootScope, $state, $stateParams, $log) {
    'use strict';

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateNotFound', 
      function(event, unfoundState, fromState, fromParams) {
        $log.log(unfoundState.to); // "unknown.state"
        $log.log(unfoundState.toParams); // {a:1, b:2}
        $log.log(unfoundState.options); // {inherit:false} + default options
        $state.go("error?code=404");
      });

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

    $rootScope.showSettings = function() {
      $log.log('show settings');
    };

    $log.log($rootScope);
    $log.log($state);
    $log.log($stateParams);
  });
