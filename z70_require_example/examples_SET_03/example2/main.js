var ViewModel = function(first, last) {
	var self = this;
	self.firstName = ko.observable(first);
	self.lastName = ko.observable(last);
	self.fullName = ko.computed(function() {
		return self.firstName() + ' ' + self.lastName();
	});
};

$(document).ready(function() {
	ko.applyBindings(new ViewModel("John", "Smith"));
})
