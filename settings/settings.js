/**
 * @ngdoc function
 * @name MainApp.controller:SettingsController
 * @description
 * # SettingsController
 * A controller of MainApp
 */
angular.module('MainApp')
  .controller('SettingsController', function ($scope, $stateParams, $log) {
    'use strict';
    $scope.displayDensity = $stateParams.displayDensity;
    $scope.showSettings = function() {
      $log.log('show settings');
      return;
    };
    $scope.data = [
      {name: "Chrome", percent:20},
      {name: "Firefox", percent:30},
      {name: "Safari", percent:60}
    ];
  });
