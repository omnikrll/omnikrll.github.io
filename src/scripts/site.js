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

var midiFile = '../src/audio/no-scrubs.mid',
	isPlaying = false;

$('#transport').click(function(event) {

	event.preventDefault();

	if (isPlaying) {
		MIDIjs.stop();
		isPlaying = false;
	} else {
		MIDIjs.play(midiFile);
		isPlaying = true;
	}

	var icon = isPlaying ? 'icon-stop' : 'icon-play2';
	$(event.target).attr('class', icon);
});

$(function() {
	checkHash();
	$('#transport').click();
	$(window).on('hashchange', checkHash);
});