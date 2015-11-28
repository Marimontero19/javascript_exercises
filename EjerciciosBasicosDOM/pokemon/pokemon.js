$(document).on('ready', function() {
 
    function searchPokemon(){

        var searchInput = $('#input-search').val();
        var searchUrl = 'http://pokeapi.co/api/v1/pokemon/' + searchInput;
        $.ajax({
            type: 'GET',
            url: searchUrl,
            success: function (response) {
                var nameElement = $('<p>').html(response.name);
                var weightElement = $('<p>').html('Weight: ' + response.weight);
                var heightElement = $('<p>').html('Height: ' + response.height);
                var introList = $('<p>').html('Types:')

                var typeList = $('<ul>');
                response.types.forEach(function(type){
                    var li = $('<li>').html(type.name);
                    li.appendTo(typeList);
                });


                $('#container').append(nameElement).append(heightElement).append(weightElement).append(introList).append(typeList);

            },
            error: function (error) {
                debugger
            }
        })
    }

    $('[data-type="button"]').on('click',searchPokemon);
});