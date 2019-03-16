requirejs.config({
	paths: {
		jquery: [
			'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
			'lib/jquery.min'
		],
		ko: [
			'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min',
			'lib/knockout-min'
		],
		bootstrap: [
			'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min',
			'lib/bootstrap-min'
		]
	}
});

requirejs(['main']);