/**
 * @ngdoc function
 * @name MainApp.controller:MainController
 * @description
 * # MainController
 * Controller of the MainApp
 */
angular.module('MainApp')
  .controller('MainController', function ($scope, $stateParams) {
    'use strict';
    $scope.errorCode = $stateParams.code;
    $scope.displayDensity = $stateParams.displayDensity;

    $scope.setMaster = function(obj, $event){
      console.log($event.target);
    };

    $scope.makeDisplayComfortable = function() {
      $scope.displayDensity = 'comfortable';
    };
    $scope.makeDisplayCozy = function() {
      $scope.displayDensity = 'cozy';
    };
    $scope.makeDisplayCompact = function() {
      $scope.displayDensity = 'compact';
    };

    $scope.changeDisplayDensity = function(displayDensity) {
      if (displayDensity === 'comfortable') {
        return;
      } else if (displayDensity === 'cozy') {
        return;
      } else if (displayDensity === 'compact') {
        return;
      }
    };

    $scope.$watch('displayDensity', function(newVal, oldVal) {
      if (newVal === oldVal) {
      }
      $scope.displayDensity = newVal;
    });
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
