/**
 * @ngdoc function
 * @name MainApp.controller:SettingsController
 * @description
 * # SettingsController
 * A controller of MainApp
 */
angular.module('MainApp')
  .controller('SettingsController', function ($scope, $stateParams) {
    'use strict';
    $scope.data = [
      {name: "Chrome", percent:20},
      {name: "Firefox", percent:30},
      {name: "Safari", percent:60}
    ];
  });
