
$(document).on('ready', function() {

	function putInput(){
		$("#container").html("<input type='text' id='input-1'>");
		$("#container").append("<button class='submit-button'>Submit</button>");
		$('.submit-button').on('click', countWords);
	}

	function countWords() {
		$('#container ul').remove();
		var inputVal = $('#input-1').val();
		$('#input-1').val('');
		var lettersDict = countLetters(inputVal);
		printLetters(lettersDict);
		
	}

	function countLetters(val){
		var solution = {}
		var letters = val.split('');

		var  allLetters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

		letters.forEach(function(letter) {
			if (letter == ' ') return;
			if (allLetters.indexOf(letter) == -1) return;

			var letterNumber = solution[letter];
			if (letterNumber >= 1){
				solution[letter] += 1
			}else {
				solution[letter] = 1;
			}
		});
		return solution;
	}

	function printLetters(solution){
		var $list = $('<ul>');
		$('#container').append($list);
		for(var letter in solution){
			var $listElement = $('<li>');
			$list.append($listElement);
			var number = solution[letter];
			$listElement.append(letter + ':' + number);
		}
	}

	putInput();

});
