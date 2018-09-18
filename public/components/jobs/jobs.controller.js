'use strict';

angular.
  module('alpineWashApp')
  .controller('JobsCtrl', function($scope, $document, $window, $timeout, $http, Upload) {
  	$scope.submitForm = function(form) {
      $scope.submitted = true;
      if (form.$valid) {
        $scope.sendEmail($scope.contact);
      }
    };
    $scope.sendEmail = function(data) {
      var url = 'https://us-central1-alpine-wash.cloudfunctions.net/httpJobsEmail';
      var contentType = (data.resume) ? data.resume.type : 'application/pdf';
      var filename = (data.resume) ? data.resume.name : 'NA';

      Upload.base64DataUrl(data.resume).then(function() {
        upload();
      });

      var upload = function() {
        $http({
          method: 'POST',
          url: url,
          data: {
            content: data,
            'Content-Type': contentType,
            filename: filename
          },
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
    };
  });