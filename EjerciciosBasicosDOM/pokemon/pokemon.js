$(document).on('ready', function() {
 
    function searchPokemon(){
        $.ajax({
            type: 'GET',
            url: 'http://pokeapi.co/api/v1/pokemon/1',
            success: function (response) {
                var nameElement = $('<p>').html(response.name);
                var weightElement = $('<p>').html('Weight: ' + response.weight);
                var heightElement = $('<p>').html('Height: ' + response.height);

                response.types.forEach(function(type){
                    console.log(type.name);
                });




                $('#container').append(nameElement).append(heightElement).append(weightElement);

            },
            error: function (error) {
                debugger
            }
        })
    }

    $('[data-type="button"]').on('click',searchPokemon);
});