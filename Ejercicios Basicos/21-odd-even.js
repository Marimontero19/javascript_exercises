// write a function that return the count of even numbers of an array

function count_evens(numbers) {

	//var ar = [1,4,5,6,7,9,4]

	var even = 0

	for( var i = 0; i < numbers.length; i = i+1){
		if (numbers[i]%2 == 0){
			even = even + 1
		}
	}
	console.log(even)
	return even
}

console.log(count_evens([1,3,4,6,5,9]) == 2)


	// for( var i = 0; i < ar.length; i = i+1){
	// 	if (ar[i]%2 == 0){
	// 		console.log("even");
	// 	} else {
	// 		console.log("odd");
	// 	}
	// }