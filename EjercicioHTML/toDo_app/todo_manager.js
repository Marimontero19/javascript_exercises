var TodoManager = function () {
	this.currentIndex = 1;
	this.tasks = [];
	this.populateTasks();
	this.setEventListeners();
};

TodoManager.prototype.addTask = function (name, status) {
	var newTask = new Task(this.currentIndex, name, status);
	this.currentIndex += 1;
	this.tasks.push(newTask);
};

TodoManager.prototype.addTaskFromInput = function () {
	var taskName = $('#task').val();
	this.addTask(taskName, 'Pending');

	this.printTasks();
	$('#task').val('');
};

TodoManager.prototype.populateTasks = function () {
	this.addTask("Ir a clase", "pending");
	this.addTask("Cocinar los lunes", "pending");
	this.addTask("Limpiar casa", "done");
};

TodoManager.prototype.printTasks = function () {
	$('#tasks-list').empty();
	this.tasks.forEach(function (task){
		var $taskListItem = task.createHTMLElement();
		$('#tasks-list').append($taskListItem);
	});
};

TodoManager.prototype.setEventListeners = function () {
	$('#task-button').on('click', this.addTaskFromInput.bind(this));
}


