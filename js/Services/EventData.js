eventsApp.factory('eventData', function() {
	return {
		event: {
			name: 'SampleEvent',
			date: '2016-02-17T16:40:30',
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
					duration: 4,
					level: 'Advanced',
					abstract: "In this session you will learn a lot.",
					upvoteCount: 0
				},
				{
					name: "session2",
					creatorName: "Bob Roberts",
					duration: 3,
					level: 'Beginner',
					abstract: "In this session you will learn a little.",
					upvoteCount: 0
				},
				{
					name: "session3",
					creatorName: "Bob Robertson",
					duration: 1,
					level: 'Intermediate',
					abstract: "In this session you will learn nothing.",
					upvoteCount: 0
				},
				{
					name: "session4",
					creatorName: "Robert Bobson",
					duration: 2,
					level: 'Intermediate',
					abstract: "In this session you will learn some things.",
					upvoteCount: 0
				}
			],
			imageUrl: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/96/140.jpg'
		}
	};
});