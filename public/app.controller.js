'use strict';

angular.
  module('alpineWashApp')
  .controller('MainCtrl', function($scope, $document, $window, $timeout, $http, Upload) {
    $scope.contactOpen = function() {
      $(document).find('body').toggleClass('ud-sidebar-open');
      $(document).find('#contact').toggleClass('ud-closed');
    };
    $scope.contactClose = function() {
      $(document).find('#contact').addClass('ud-closed');
      $(document).find('body').removeClass('ud-sidebar-open');
    };

    $scope.jobsOpen = function() {
      $(document).find('body').toggleClass('ud-sidebar-open');
      $(document).find('#jobs').toggleClass('ud-closed');
    };
    $scope.jobsClose = function() {
      $(document).find('#jobs').addClass('ud-closed');
      $(document).find('body').removeClass('ud-sidebar-open');
    };

    $scope.termsOpen = function() {
      $(document).find('body').toggleClass('ud-sidebar-open');
      $(document).find('#termsOfUse').toggleClass('ud-closed');
    };
    $scope.termsClose = function() {
      $(document).find('#termsOfUse').addClass('ud-closed');
      $(document).find('body').removeClass('ud-sidebar-open');
    };

    $scope.privacyOpen = function() {
      $(document).find('body').toggleClass('ud-sidebar-open');
      $(document).find('#privacyPolicy').toggleClass('ud-closed');
    };
    $scope.privacyClose = function() {
      $(document).find('#privacyPolicy').addClass('ud-closed');
      $(document).find('body').removeClass('ud-sidebar-open');
    };

    $timeout(function() {
      $('[data-toggle="tooltip"]').tooltip();
      // $('').tooltip({ boundary: 'window' });
      // $('').tooltip({container: 'body'});
    }, 1000);
  });