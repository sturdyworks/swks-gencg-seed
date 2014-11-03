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

    $scope.goToOnSpace = function (event, locationToGo) {
      if (event.keyCode === 32) {
        // Read: https://docs.angularjs.org/guide/$location
        // Replace
        // $location.href = locationToGo
        // $location.update(locationToGo)
        // With
        if (locationToGo === "home") {
          window.location.href = '/#/';
        } 
        else {
          window.location.href = '/#/' + locationToGo;
        }
      }
    };

    $scope.$watch('settings.displayDensity', function() {
      $scope.settings.btnDensity = 'btn-' + $scope.settings.displayDensity;
      $scope.settings.navbarDensity = 'navbar-' + $scope.settings.displayDensity;
      $scope.settings.navbarNavDensity = 'navbar-nav-' + $scope.settings.displayDensity;
      $scope.settings.navbarBtnDensity = 'navbar-btn-' + $scope.settings.displayDensity;
      $scope.settings.navbarBrandDensity = 'navbar-brand-' + $scope.settings.displayDensity;
      $scope.settings.navbarToggleDensity = 'navbar-toggle-' + $scope.settings.displayDensity;
      $scope.settings.dropdownMenuDensity = 'dropdown-menu-' + $scope.settings.displayDensity;
      $scope.settings.dropdownHeaderDensity = 'dropdown-header-' + $scope.settings.displayDensity;
      $scope.settings.marginFixDensity = 'margin-fix-' + $scope.settings.displayDensity;
      $scope.settings.faIconDensity = 'fa-icon-' + $scope.settings.displayDensity;
    });

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

    $rootScope.showHome = function() {
      $log.log('show home');
    };
    $rootScope.showAbout = function() {
      $log.log('show about');
    };
    $rootScope.showContact = function() {
      $log.log('show contact');
    };
    $rootScope.showUserLogin = function() {
      $log.log('show userLogin');
    };
    $rootScope.showSettings = function() {
      $log.log('show settings');
    };
    $rootScope.showThemes = function() {
      $log.log('show themes');
    };

    $rootScope.settings = {
      displayDensity: 'cozy',
      btnDensity: 'btn-cozy',
      navbarDensity: 'navbar-cozy',
      navbarNavDensity: 'navbar-nav-cozy',
      navbarBtnDensity: 'navbar-btn-cozy',
      navbarBrandDensity: 'navbar-brand-cozy',
      navbarToggleDensity: 'navbar-toggle-cozy',
      dropdownMenuDensity: 'dropdown-menu-cozy',
      dropdownHeaderDensity: 'dropdown-header-cozy',
      marginFixDensity: 'margin-fix-cozy',
      faIconDensity: ''
    };

    $log.log($rootScope);
    $log.log($state);
    $log.log($stateParams);
  });
