$(document).ready(function(){

	function searchArtist(){
		var searchInput = $("#search-input").val();
		var searchUrl = "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist";
		$.ajax({
			type: "GET",
			url: searchUrl,
			success: function(response){
				var artistsInfo = response.artists.items;
				printArtists(artistsInfo);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

	function printArtists(artists){
		//console.log(artistsInfo);
		artists.forEach(function(artist) {
			createElement(artist);
		});
	}

	function createElement(artistInfo){
		console.log(artistInfo.name);
	}


	$("#search-button").on("click",searchArtist);

});