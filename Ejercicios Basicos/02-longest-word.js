// Write a method that takes in a string. Return the longest word in
// the string. You may assume that the string contains only letters and
// spaces.
//
// You may use the String `split` method to aid you in your quest.


function longest_word(sentence) {
	var words = sentence.split(' ')
	//console.log(words)
	var longestWord = ''

	words.forEach(function(word){
		if (word.length > longestWord.length){
			longestWord = word
		}
	})
	return longestWord
}

console.log(longest_word("Hello Javascript nice to meet you") == "Javascript" )


