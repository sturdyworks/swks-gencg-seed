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
    $scope.showSettings = function() {
      console.log('Enter SettingsController.showSettings');
      var propertiesToKeep = [{
        'attrName' : 'class',
        'propName' : 'className',
        'name'     : 'className'
      }];
      var getAttributes = function(el) {
        var toReturn = {};
        _.each(propertiesToKeep, function(property) {
          var attr = _.findWhere(_.values(el.attributes), {localName : property.attrName || property.name});
          if (attr) {
            toReturn[property.propName || property.name] = attr.value;
          }
        });

        console.log(toReturn);
      };
    };
    $scope.data = [
      {name: "Chrome", percent:20},
      {name: "Firefox", percent:30},
      {name: "Safari", percent:60}
    ];
  });
