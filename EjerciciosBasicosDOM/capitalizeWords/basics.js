//(function(){
//})();
$(document).on('ready',initialize);

function initialize() {
 	'use strict';

	//alert('hola');
	
	$('#container').html('hola');
	
	function saySomething(some){
		console.log(some);
		return 10;
	};
	console.log(saySomething('hello world'));

 };