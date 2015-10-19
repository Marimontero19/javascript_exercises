// Write a method that will take a string as input, and return a new
// string with the same letters in reverse order.

function reverse(string) {
	//console.log(string)
	var characters = string.split("")
	//console.log(characters)
	var newWord = []

	characters.forEach(function (character){
		newWord.unshift(character)
	})
	var reversedString = newWord.join('')
	return reversedString
}

//reverse('hello')

console.log(reverse("olleh") == "hello")
