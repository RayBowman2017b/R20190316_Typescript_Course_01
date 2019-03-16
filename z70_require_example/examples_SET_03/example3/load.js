requirejs.config({
	paths: {
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
		ko: 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min',
		bootstrap: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min'
	}
});

requirejs(['main']);