var checkHash = function() {
	var hash = window.location.hash;

	if (!!hash) {
		var page = '../src/content/' + hash.replace('#', '') + '.html';

		$.get(page, function(data) {
			$('.content').html(data);
			$('.nav-link').removeClass('active');
			$(hash).addClass('active');
		});		
	}
}

$(function() {
	checkHash();
	$(window).on('hashchange', checkHash);
});