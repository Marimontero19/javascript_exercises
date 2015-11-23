$(document).on('ready', function() {
 
var allLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 
function letter(){
    var allLettersLength = allLetters.length;
    for (i = 0; i < allLettersLength; i++) {
        if (i > allLettersLength){
            i[0];       
        }
    }
    return letter;
}
 
 
function placeElements() {
    $('#container').html('<input type="text" dom-element="message">');
    var selectElement = createSelect();
    $("#container").append(selectElement);
    $('#container').append('<button dom-element="button">Submit</button>');
    $('[dom-element="button"]').on('click',decriptor);
}
 
function createSelect() {
    var select = $("<select id='select-input'></select>");
 
    for(var i = 1; i < 11; i++){
        var selectOption = $('<option value ="' + i + '">' + i + '</option>');
        select.append(selectOption);
    };
 
    return select;
     
}
 
 
function decriptor(word){
    var inputVal = $('[dom-element="message"]').val();
 
    var characters = inputVal.split('');
    var newCharacters = [];
    var inputSelectVal = Number($( "#select-input:text, select" ).val());
 
    characters.forEach(function(character){
        var newIndex = allLetters.indexOf(character) + inputSelectVal;
        var newLetter = allLetters[newIndex];
        newCharacters.push(newLetter);
    });
 
    var newWord = newCharacters.join('');
    $('#container').append('<p>' + newWord + '</p>');
 
}
 
function cypher(word) {
 
    return encodedWord;
}
 
placeElements();
 
});