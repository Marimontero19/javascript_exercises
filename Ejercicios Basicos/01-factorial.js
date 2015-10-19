// Write a method that takes an integer `n` in; it should return
// n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
//
// As a special case, `factorial(0) == 1`.


function factorial(n) {

	var result = 1

for (var i = 1; i >= 0; i = i + 1) {
   if (n >= 1) {
     result = result * i
   } else {
     result == 0
   }
}
	
}

console.log(factorial(4) == 24)


//	if (n == 0) {
//    	return 1;
//  	} else {
//    	return (n * factorial(n-1));
// 	}


//for(var i = 1; i >= 0; i = i+1){
		//console.log(i)
//		result = result * i
//	}
//	console.log(result)
//	return result