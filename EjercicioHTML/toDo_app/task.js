var Task = function (id, name, status) {
	this.id = id;
	this.name = name;
	this.status = status;
}

Task.prototype.createHTMLElement = function () {
	var $taskListItem = $('<li>').addClass("another-background");
	$taskListItem.attr('data-index', this.id);
	var $checkBox = $('<input>').addClass('check-tasks');
	$checkBox.attr('type', 'checkbox');
	$taskListItem.append($checkBox);
	$taskListItem.append(this.status + ": " + this.name);
	var $buttonElement = $('<button>').addClass('tiny remove-task').html('x');
	$buttonElement.attr("data-index", this.id);
	$taskListItem.append($buttonElement); //append me anade elementos al espacio del html

	return $taskListItem;
}