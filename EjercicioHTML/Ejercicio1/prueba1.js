function factorial(n) {

	var result = 1;

	for (var i = 1; i <= n; i = i + 1){
		result = result * i;
		console.log("factorial de " + i);
		console.log(result);
	}

	return result;
	
}

console.log(factorial(4) == 24)