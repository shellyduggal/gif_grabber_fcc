$(document).ready(function() {
	var getQuote = function() {
		$.getJSON("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=gilmore+girls", function(json) {
			console.log(json["data"].image_url);
			$(".quote").html('<img src="' + json["data"].image_url + '">');
		});
	}

	getQuote();
	$('#more').click(getQuote);
});

