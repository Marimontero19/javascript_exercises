
//Write a method that takes a string and returns the number of vowels
//in the string. You may assume that all the letters are lower cased.
//You can treat "y" as a consonant.

function count_vowels(string) {
		//console.log(string)
	var letters = string.split("")
		//console.log(letter)
	var vowels = ["a","e","i","o","u"]
		//console.log(vowels)
	var total_vowels = 0

	for(var i = 0; i < letters.length; i = i + 1){
		if(vowels.indexOf(letters[i]) >= 0) { 
			total_vowels = total_vowels + 1
		}
	}
	return total_vowels
}

console.log(count_vowels("hola") == 2)


//for (var i = 0; i <= vowels.length; i = i + 1) {

//	    total_vowels = total_vowels + 1
//	 }
//	 console.log(total_vowels)
//	 return total_vowels



// for (var i = 0; i < 10; i = i + 1) {
//   if (i > 4) {
//     console.log('more than 4')
//   } else {
//     console.log(i)
//   }
// }

//if (string.match(/[aeiou]/gi)) {
//    	return string.length;
//  		} 