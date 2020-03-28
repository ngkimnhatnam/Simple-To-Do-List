

//Toggle line-through on click
$("ul").on("click","li", function(){
	$(this).toggleClass("line-through");
	
});

//Click on span X to delete ToDos
$("ul").on("click","span", function(e){

	//This fades out and remove the PARENT li of the span tag
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	//This stops event bubbling
	e.stopPropagation();
});

//This adds user input as new li
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//Take input from input form
		var newToDo = $(this).val();

		//create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+newToDo+"</li>");

		$(this).val("");
	}
}
 );

//Fade in or out the input form
$("i.fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle();
});







