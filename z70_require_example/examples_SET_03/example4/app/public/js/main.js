define(['jquery', 'ko', 'viewmodel'], function ($, ko, ViewModel) {
	require(['lib/domReady!'], function (doc) {
		// Bootstrap.css CDN load failure fallback
		$(function () {
			if ($('.hidden:first').is(':visible') === true) {
				$('<link rel="stylesheet" type="text/css" href="bootstrap.min.css" />').appendTo('head');
			}
			
			$('#app').removeClass('hidden');
		});
		
		$('#app').load('content.html', function() {
			var viewModel = new ViewModel("John", "Smith");
			ko.applyBindings(viewModel);
			
			$('#name').click(function() {
				$('#input').load('input.html', function() {
					ko.applyBindings(viewModel, $('#input')[0]);
					$('#name').unbind('click');
				})
			})
		});
	});
});