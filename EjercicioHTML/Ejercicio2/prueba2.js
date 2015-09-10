// Write a method that takes a string and returns true if it is a
// palindrome. A palindrome is a string that is the same whether written
// backward or forward. Assume that there are no spaces; only lowercase
// letters will be given.

function palindrome(string) {

	return string == string.split('').reverse().join('')
}


console.log(palindrome("kayak"));
console.log(palindrome("civic"));
console.log(palindrome("hola"));
