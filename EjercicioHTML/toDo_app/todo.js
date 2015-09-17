$(document).ready(function(){
	var currentIndex = 1;

	var firstTask = new Task(currentIndex, "Ir a clase", "pending");
	currentIndex += 1;

	var secondTask = new Task(currentIndex, 'Cocinar los lunes','Pending');
	currentIndex += 1;

	var tasks = [firstTask, secondTask, new Task(currentIndex, 'Limpiar casa','Done')];
	currentIndex += 1;

	function printTask(){

		tasks.forEach(function (task, index){
			var $taskListItem = task.createHTMLElement();
			$('#tasks-list').append($taskListItem);
		});
	}

	function removeTask(event){
		var idToRemove = $(event.currentTarget).parent().attr("data-index");
		var tempTasks = tasks.filter(function (task) {
			return task.id != idToRemove;
		});
		tasks = tempTasks;
		$("#tasks-list").empty();
		printTask();
	}

	function addTask(){

		var inputText = $('#task').val();
		var newTask = new Task(currentIndex, inputText,'Pending');
		currentIndex += 1;
		tasks.push(newTask);

		var indexNewPhrase = tasks.length - 1;
		var $taskListItem = newTask.createHTMLElement();
		$('#tasks-list').append($taskListItem);
		$('#task').val('');
	}

	function changeColor(event){
		var $checkboxNewColor = $(event.currentTarget); //checkbox q he seleccionado 
		var $selectedTask = $checkboxNewColor.parent();
		//$selectedTask.addClass("background-task");	
		$selectedTask.toggleClass("background-task another-background");
	}

	function deleteSelectedTask(){
		var listItems = $('#tasks-list li');
		var selectedItems = listItems.filter(function(index){
			return $(this).children(".check-tasks").prop("checked");
		});		

		var idsToRemove = selectedItems.map(function(index){
			return Math.floor($(this).attr("data-index"));
		}).toArray();

		var tempTasks = tasks.filter(function (task) {
			return idsToRemove.indexOf(task.id) == -1;
		});

		tasks = tempTasks;
		$("#tasks-list").empty();
		printTask();

	}

	$('#task-button').on('click', addTask);

	printTask();

	$("#tasks-list").on("click", "button.remove-task", removeTask);
	$("#tasks-list").on('change', ".check-tasks", changeColor);
	$("#task-button-delete").on('click',deleteSelectedTask);
});



// <button class="tiny remove-task" data-index="2">x</button>
