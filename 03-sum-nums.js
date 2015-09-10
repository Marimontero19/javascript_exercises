// Write a method that takes in an integer `num` and returns the sum of
// all integers between zero and num, up to and including `num`.



function sum_nums(num) {

	var result = 0

	for(var i = 1; i <= num; i = i+1){
		//console.log(i)
		result = result + i
	}
	console.log(result)
	return result
}


console.log(sum_nums(5) == 15)


