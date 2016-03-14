"use strict";

eventsApp.controller('EventController', function EventController($scope, eventData) {
	$scope.sortOrder = 'name'
	eventData.getEvent(function(event) {
		$scope.event = event;
	});
	
	$scope.upVoteSession = function(session) {
		session.upvoteCount++;
	};
	
	$scope.downVoteSession = function(session) {
		session.upvoteCount--;
	};
});