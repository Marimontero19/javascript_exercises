$(document).ready(function(){

	var firstTask = new Task("Ir a clase", "pending");

	var secondTask = new Task('Cocinar los lunes','Pending');

	var tasks = [firstTask, secondTask, new Task('Limpiar casa','Done')];

	function printTask(){

		tasks.forEach(function (task, index){
			var $taskListItem = $('<li>');
			$taskListItem.append(task.status + ": " + task.name);
			var $buttonElement = $('<button>').addClass('tiny remove-task').html('x');
			$buttonElement.attr("data-index", index);
			$taskListItem.append($buttonElement); //append me anade elementos al espacio del html
			$('#tasks-list').append($taskListItem);
		});
	}

	function removeTask(event){
		var indexToRemove = $(event.currentTarget).attr("data-index");
		tasks.splice(indexToRemove, 1);
		$("#tasks-list").empty();
		printTask();
	}

	function addTask(){

		var inputText = $('#task').val();
		var newTask = new Task(inputText,'Pending');
		tasks.push(newTask);
		var indexNewPhrase = tasks.length - 1;

		var $taskListItem = $('<li>');
		$taskListItem.append(newTask.status + ": " + newTask.name );
		var $buttonElement = $('<button>').addClass('tiny remove-task').html('x');
		$buttonElement.attr("data-index", indexNewPhrase);
		$taskListItem.append($buttonElement);
		$('#tasks-list').append($taskListItem);
		$('#task').val('');
	}

	$('#task-button').on('click', addTask);

	printTask();

	$("#tasks-list").on("click", "button.remove-task", removeTask);
});



// <button class="tiny remove-task" data-index="2">x</button>
