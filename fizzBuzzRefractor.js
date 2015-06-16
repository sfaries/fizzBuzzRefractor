$(document).ready(function(){

// Variables
var $integer = $('#input').val(+""); //can i chain this with parseInt();?

//listen for text input
	$('#input').on('keypress', function(Refractor));

//Convert string into integer
	//$("#input").parseInt();

//Named Function accepting integer as input
	Function Refractor($integer){
		for (var i = 1; i == $integer; i++){
			document.write("<br />");

			if ((i % 3 === 0) && (i % 5 === 0)){
				document.write('fizzbuzz');
			}
			else if ((i % 3 === 0) && (i % 5 != 0)){
				document.write('fizz');
			}
			else if ((i % 5 === 0) && (i % 3 !=0)){
				document.write('buzz');
			}
			else {
				document.write(i);
			}
		}
	};

//Code for FizzBuzz
/*
	for (var i = 1; i < 101; i++) 
		{
			document.write("<br />");

			if ((i % 3 == 0) && (i % 5 == 0)) {
			document.write('fizzbuzz');
			} 
			else if ((i % 3 == 0) && (i % 5 != 0)) {
			document.write('fizz'); 
			} 
			else if ((i % 5 == 0) && (i % 3 != 0)) {
			document.write('buzz'); 
			} 
			else {
			document.write(i); 
			}
		}
	*/

});