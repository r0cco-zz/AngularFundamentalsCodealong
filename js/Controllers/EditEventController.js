'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {
	$scope.saveEvent = function(event) {
		window.alert('event ' + event.name + ' saved!');
	};
	$scope.cancelEdit = function() {
		window.location = '../AngularFundamentalsCodealong/Index.html';
	}
});