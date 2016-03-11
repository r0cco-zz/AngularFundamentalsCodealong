"use strict";

eventsApp.controller('EventController', function EventController($scope) {
	$scope.event = {
		name: 'SampleEvent',
		date: '1/1/2016',
		time: '10:30 am',
		location: {
			address: '123 Street St',
			city: 'Townsville',
			state: 'CA'
		},
		sessions: [
			{
				name: "session1",
				creatorName: "Bob Smith",
				duration: "1 hr",
				level: 'Advanced',
				abstract: "In this session you will learn a lot.",
				upvoteCount: 0
			},
			{
				name: "session2",
				creatorName: "Bob Roberts",
				duration: "4 hr",
				level: 'Beginner',
				abstract: "In this session you will learn a little.",
				upvoteCount: 0
			},
			{
				name: "session3",
				creatorName: "Bob Robertson",
				duration: "16 hr",
				level: 'Intermediate',
				abstract: "In this session you will learn nothing.",
				upvoteCount: 0
			}
		],
		imageUrl: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/96/140.jpg'
	}
	
	$scope.upVoteSession = function(session) {
		session.upvoteCount++;
	};
	
	$scope.downVoteSession = function(session) {
		session.upvoteCount--;
	};
});