'use strict';

angular.
  module('alpineWashApp')
  .run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ])
  .config(function($locationProvider, $urlRouterProvider, $stateProvider) { 
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html'
      });

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
  });