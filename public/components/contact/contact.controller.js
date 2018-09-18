'use strict';

angular.
  module('alpineWashApp')
  .controller('ContactCtrl', function($scope, $document, $window, $timeout, $http, Upload) {
  	$scope.submitForm = function(form) {
      $scope.submitted = true;
      if (form.$valid) {
        $scope.sendEmail($scope.contact);
      }
    };
    $scope.sendEmail = function(data) {
      var url = 'https://us-central1-alpine-wash.cloudfunctions.net/httpContactEmail';
      $http({
        method: 'POST',
        url: url,
        data: data,
        headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
      }).then(function successCallback(res) {
        console.log(res);
        $scope.submitted = false;
        $scope.contact = {};
        $scope.success = true;
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(err) {
        console.log(err);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    };
  });