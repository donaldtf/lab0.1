'use strict';

var app = angular.module('weatherApp', ['ngMaterial', 'ngRoute',
'ngMdIcons', 'ui.router',
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html',
    controller: 'homeController',
  })

  .state('current', {
    url: '/current',
    templateUrl: '/views/current.html',
    controller: 'CurrentCtrl',
  })

  .state('resume', {
    url: '/resume',
    templateUrl: '/views/resume.html',
    controller: 'ResumeCtrl',
  })

  .state('forecast', {
    url: '/forecast',
    templateUrl: '/views/forecast.html',
    controller: 'forecastController',
  });

});

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('teal')
  .accentPalette('amber');
});

app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = buildDelayedToggler('left');
  $scope.toggleRight = buildToggler('right');
  $scope.isOpenRight = function(){
    return $mdSidenav('right').isOpen();
  };
  /**
  * Supplies a function that will continue to operate until the
  * time is up.
  */
  function debounce(func, wait, context) {
    var timer;
    return function debounced() {
      var context = $scope,
      args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }
  /**
  * Build handler to open/close a SideNav; when animation finishes
  * report completion in console
  */
  function buildDelayedToggler(navID) {
    return debounce(function() {
      $mdSidenav(navID)
      .toggle()
      .then(function () {
        $log.debug("toggle " + navID + " is done");
      });
    }, 200);
  }
  function buildToggler(navID) {
    return function() {
      $mdSidenav(navID)
      .toggle()
      .then(function () {
        $log.debug("toggle " + navID + " is done");
      });
    }
  }
})
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('left').close()
    .then(function () {
      $log.debug("close LEFT is done");
    });
  };
})
