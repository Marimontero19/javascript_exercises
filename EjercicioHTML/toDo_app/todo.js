$(document).ready(function(){

	var todoManager = new TodoManager();
	todoManager.printTasks();

	// function removeTask(event){
	// 	var idToRemove = $(event.currentTarget).parent().attr("data-index");
	// 	var tempTasks = tasks.filter(function (task) {
	// 		return task.id != idToRemove;
	// 	});
	// 	tasks = tempTasks;
	// 	$("#tasks-list").empty();
	// 	printTask();
	// }

	// function changeColor(event){
	// 	var $checkboxNewColor = $(event.currentTarget); //checkbox q he seleccionado 
	// 	var $selectedTask = $checkboxNewColor.parent();
	// 	//$selectedTask.addClass("background-task");	
	// 	$selectedTask.toggleClass("background-task another-background");
	// }

	// function deleteSelectedTask(){
	// 	var listItems = $('#tasks-list li');
	// 	var selectedItems = listItems.filter(function(index){
	// 		return $(this).children(".check-tasks").prop("checked");
	// 	});		

	// 	var idsToRemove = selectedItems.map(function(index){
	// 		return Math.floor($(this).attr("data-index"));
	// 	}).toArray();

	// 	var tempTasks = tasks.filter(function (task) {
	// 		return idsToRemove.indexOf(task.id) == -1;
	// 	});

	// 	tasks = tempTasks;
	// 	$("#tasks-list").empty();
	// 	printTask();

	// }

	// $("#tasks-list").on("click", "button.remove-task", removeTask);
	// $("#tasks-list").on('change', ".check-tasks", changeColor);
	// $("#task-button-delete").on('click',deleteSelectedTask);
});