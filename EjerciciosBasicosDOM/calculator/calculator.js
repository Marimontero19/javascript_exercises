
$(document).on('ready',putCalculator);

function putCalculator(){
	$("#container").html("<input type='text' id='input-1'>");
	var selectElement = createSelect();
	$("#container").append(selectElement);
	$("#container").append("<input type='text' id='input-2'>");
	$("#container").append("<button class='submit-button'>Submit</button>");
	$('.submit-button').on('click', calculate);
}

function createSelect() {
	var select = $("<select class='select-input'></select>");
	var sumOption = $("<option value='+'> + </option>");
	var subtractOption = $("<option value='-'> - </option>");
	select.append(sumOption).append(subtractOption);

	return select;
}

function calculate(){
	var sum = $("<p>");
	$("#container").append(sum);
	var inputVal1 = Number($("#input-1").val());
	var inputVal2 = Number($("#input-2").val());
	var operation = $(".select-input").val();
	if (operation == '+'){
		var inputSum = inputVal1 + inputVal2;
	} else {
		var inputSum = inputVal1 - inputVal2;
	}
	sum.append(inputSum);
}