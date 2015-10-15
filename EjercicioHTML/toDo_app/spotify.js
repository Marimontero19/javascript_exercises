$(document).ready(function(){

	function searchArtist(){
		var searchInput = $("#search-input").val();
		var searchUrl = "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist";
		$.ajax({
			type: "GET",
			url: searchUrl,
			success: function(response){
				var artistsInfo = response.artists.items;
				$('#artist-info').empty();
				$("#search-input").val('');
				printArtists(artistsInfo);
			},
			error: function(error){
				console.log(error);
			}
		});
	};

	function getAlbums(event) {
		event.preventDefault();
		var $artistSelected = $(event.currentTarget);
		var albumsUrl = $artistSelected.attr('data-url');
		$.ajax({
			type: "GET",
			url: albumsUrl,
			success: function(response){
				$('#artist-albums').empty();
				printAlbums(response.items);
			},
			error: function(error){
				console.log(error);
			}
		});
	};

	function getSongs(event) {
		event.preventDefault();
		var $albumSelected = $(event.currentTarget);//elemento de dom que se clicka en le momento
		var albumUrl = $albumSelected.attr('data-url');
		$.ajax({
			type: "GET",
			url: albumUrl,
			success: function(response){
				$('#tracks-album').empty();
				printTracks(response.tracks.items);
			},
			error: function(error){
				console.log(error);
			}
		});
	};

	function createArtistElement(artistInfo){
		//console.log(artistInfo.name);
		var $artistItem = $('<li>');
		var $artistLink = $('<a href="#">').addClass('artist-result');
		var albumsUrl = artistInfo.href + "/albums";
		$artistLink.attr('data-url', albumsUrl);
		$artistLink.html(artistInfo.name);
		$artistItem.html($artistLink);
		// $artistLink.on('click', getAlbums);
		$('#artist-info').append($artistItem);
	}

	function printArtists(artists){
		//console.log(artistsInfo);
		artists.forEach(function(artist) {
			createArtistElement(artist);
		});
	}

	function createAlbumElement(album){
		var $albumItem = $('<li>');
		var $albumLink = $('<a href="#">').addClass('album-result');
		$albumLink.html(album.name);
		$albumLink.attr('data-url', album.href)
		$albumItem.html($albumLink);
		$('#artist-albums').append($albumItem);
	}

	function printAlbums(albums){
		albums.forEach(function(album){
			createAlbumElement(album);
		});
		$('html, body').animate({
		    scrollTop: $("#artist-albums").offset().top
		}, 1000);

	}

	function createTrackElement(trackInfo){
		// trackInfo.preview_url
		var $trackItem = $('<li>');
		var $trackLink = $('<a href="#">').addClass('track-result');
		var trackUrl = trackInfo.preview_url;
		$trackLink.attr('data-preview-url', trackUrl);
		$trackLink.html(trackInfo.name);
		$trackItem.html($trackLink);
		$('#tracks-album').append($trackItem);
	}

	function printTracks(tracks){
		tracks.forEach(function(track){
			createTrackElement(track);
		});
		$('html, body').animate({
		    scrollTop: $("#tracks-album").offset().top
		}, 1000);
	}

	function playSong(event){
		var $songSelected = $(event.currentTarget);
		var urlPlay = $songSelected.attr('data-preview-url');
		$('audio').attr('src',urlPlay)[0].play();

	}


	$("#search-button").on("click", searchArtist);
	$('#artist-info').on('click', '.artist-result', getAlbums);
	$('#artist-albums').on('click', '.album-result', getSongs);
	$('#tracks-album').on('click', '.track-result', playSong);

});