define(['jquery', 'ko', 'viewmodel'], function ($, ko, ViewModel) {
	$(document).ready(function() {
		ko.applyBindings(new ViewModel("John", "Smith"));
	});
});