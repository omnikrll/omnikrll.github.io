var checkHash = function() {
	console.log(window.location.hash, typeof window.location.hash);
	var homeHashes = ['', '#', '#home', '#index'],
		hash = homeHashes.indexOf(window.location.hash) != -1 ? '#home' : window.location.hash;

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