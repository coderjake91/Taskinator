//select id(s) of DOM elements
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//task handler function that creates new list elements and appends them to the unordered-list element, accepts event object as am argument
var createTaskHandler = function(event){

    //prevent browsers default behavior-i.e. refreshing upon form submission
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemEl = document.createElement("li");
    //style list item
    listItemEl.className = "task-item";

    //create new div inside of list element, assign a style class, add HTML content to div (task name and task type from form)
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class= 'task-type'>" + taskTypeInput + "</span>";

    //append new div with content to new list element (task item)
    listItemEl.appendChild(taskInfoEl);

    //add entire list item to unordered list
    tasksToDoEl.appendChild(listItemEl);
};

 //add an event listener to formEl, act upon submit and create a new list element with text content/style, then append to parent "ul" element
 formEl.addEventListener("submit", createTaskHandler);