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
	}

	function getAlbums(event) {
		event.preventDefault();
		var $artistSelected = $(event.currentTarget);
		var albumsUrl = $artistSelected.attr('data-url');
		$.ajax({
			type: "GET",
		});
	};

			url: albumsUrl,
			success: function(response){
				$('#artist-albums').empty();
				printAlbums(response.items);
			},
			error: function(error){
				console.log(error);
			}
	function createElement(artistInfo){
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
			createElement(artist);
		});
	}

	function createAlbum(album){
		var $albumItem = $('<li>');
		var $albumLink = $('<a href="#">').addClass('album-result');
		$albumLink.html(album.name);
		$albumLink.attr('data-url', album.href)
		$albumItem.html($albumLink);
		$('#artist-albums').append($albumItem);
	}

	function printAlbums(albums){
		albums.forEach(function(album){
			createAlbum(album);
		});

	}

	function getTracks(event){
		debugger
	}


	$("#search-button").on("click",searchArtist);
	$('#artist-info').on('click', '.artist-result', getAlbums);
	$('#artist-albums').on('click', '.album-result', getTracks);

});