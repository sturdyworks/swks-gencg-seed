      if ($scope.settings.displayDensity === 'comfortable') {
        $scope.settings.faIconDensity = 'fs-3x';
      } else if ($scope.settings.displayDensity === 'cozy') {
        $scope.settings.faIconDensity = '';
      } else if ($scope.settings.displayDensity === 'compact') {
        $scope.settings.faIconDensity = '';
      }


    $scope.$watch('settings[displayDensity]', function() {
        $scope.navbarDensity = 'navbar-' + $scope.displayDensity;
        $scope.navbarNavDensity = 'navbar-nav-' + $scope.displayDensity;
        $scope.navbarBrandDensity = 'navbar-brand-' + $scope.displayDensity;
    });
    $log.log($scope.navbarDensity);
    $log.log($scope.navbarNavDensity);
    $log.log($scope.navbarBrandDensity);



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
    $scope.errorCode = $stateParams.code;
    $scope.displayDensity = $stateParams.displayDensity;

    /*
    <li data-ng-click="setMaster(section, $event)" role="presentation">
      <a ui-sref="contact" role="menuitem">
      <span class="fa fa-paper-plane-o"></span>&nbsp;&nbsp;Contact</a></li>
    */
    $scope.setMaster = function(obj, $event){
      $log($scope.displayDensity);
      $log($event.target);
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
