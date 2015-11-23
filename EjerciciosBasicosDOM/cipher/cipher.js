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
    // var selectsObject = createSelect();
    // $("#container").append(selectsObject.signsSelect);
    // $("#container").append(selectsObject.numbersSelect);
    $('#container').append(selectSigns());
    $('#container').append(createSelect());
    $('#container').append('<button dom-element="button">Submit</button>');
    $('[dom-element="button"]').on('click',decriptor);

}
 
function createSelect() {
    // var selectSigns = $("<select id='select-sign')></select>");
    // var positiveSign = ("<option value='+'> + </option>");
    // var negativeSign = ("<option value='-'> - </option>");
    // selectSigns.append(negativeSign).append(positiveSign);

    var select = $("<select id='select-input'></select>");
 
    for(var i = 1; i < 11; i++){
        var selectOption = $('<option value ="' + i + '">' + i + '</option>');
        select.append(selectOption);
    };

    // var selectsObject = {
    //     numbersSelect: select,
    //     signsSelect: selectSigns
    // };
 
    // return selectsObject;

    return select;
}

function selectSigns(){
    var selectSigns = $("<select id='select-sign')></select>");
    var positiveSign = ("<option value='+'> + </option>");
    var negativeSign = ("<option value='-'> - </option>");
    selectSigns.append(negativeSign).append(positiveSign);

    return selectSigns;
}
 
 
function decriptor(word){
    var inputVal = $('[dom-element="message"]').val();
 
    var characters = inputVal.split('');
    var newCharacters = [];
    var inputSelectVal = Number($('#select-input').val());
    var inputSignVal = $('#select-sign').val();

    characters.forEach(function(character){
        if(inputSignVal == '-'){
            var newIndex = allLetters.indexOf(character) - inputSelectVal;
        } else{
            var newIndex = allLetters.indexOf(character) + inputSelectVal;
        }

        if(newIndex >= allLetters.length){
            newIndex = newIndex - allLetters.length;
        } else if(newIndex < 0){
            newIndex = newIndex + allLetters.length;
        }
       
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