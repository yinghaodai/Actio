var main = function() {
	"use strict";

	var firstTodo = new ToDo("name1", "date1", false, false);
	var secondTodo = new ToDo("name2", "date2", false, false);
	var thirdTodo = new ToDo("name3", "date3", true, false);

	displayToDo(firstTodo, ".toDoList1");
	displayToDo(secondTodo, ".toDoList1 .subToDoList1");
	displayToDo(thirdTodo, ".toDoList1 .subToDoList2");

	var toDoList1 = new ToDoList("category1");
	toDoList1.list.push(firstTodo);
	toDoList1.list.push(secondTodo);

	readToDoList(toDoList1, getToDoList());

	displayToDoList(toDoList1, ".toDoList1");
		
};

	var addToDo = function(toDos) {
		if($(".add input").val() !==""){
			cleanup();
			var newCheckBox = $('<input type="checkbox">');
			var newButton = $("<button>").text("X");
			buttonEvents(newButton);
			var newToDo = $("<p data-id='" + toDos + "'>").text(" " + $(".add input").val() + " ").append(newButton).prepend(newCheckBox);
			$(".comments").append(newToDo);
			$(".add input").val("");
			toDos++;
		}
	};

	var editToDo = function(toDos) {
		cleanup();
		if($(".comments input").prop('checked')){
			$(".comments input").filter('checked').parent().remove();
			addToDo(toDos);
		}
		else{
			document.getElementById("editmessage").innerHTML="Select the items to be edited";
		}
	};

	$(".add button").on("click", function (event) {
		addToDo(toDos);
	});

	$(".add input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			addToDo(toDos);
		}
	});

	function buttonEvents(el){
		$(el).click(function (event) {
			$(this).parent().remove();
		});
	}

	buttonEvents($(".comments button"));

	$(".edit button").click(function (event) {
		editToDo(toDos);
	});

	$(".edit input").on("keypress", function (event) {
		if(event.keyCode === 13) {
			editToDo(toDos);
		}
	});

	function cleanup(){
		document.getElementById("editmessage").innerHTML="";
	};

$(document).ready(main);