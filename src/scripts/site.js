var homeHashes = ['', '#', '#home', '#index'];

var checkHash = function() {
	var hash = homeHashes.indexOf(window.location.hash) != -1 ? '#home' : window.location.hash;

	if (!!hash) {
		var page = '../src/content/' + hash.replace('#', '') + '.html';
		$('.content').empty().addClass('loading');


		$.get(page, function(data) {
			$('.content').html(data).removeClass('loading');
			$('.nav-link').removeClass('active');
			$(hash).addClass('active');
		});		
	}
}

$(function() {
	checkHash();
	$(window).on('hashchange', checkHash);
});