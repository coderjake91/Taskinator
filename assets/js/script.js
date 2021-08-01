//select id(s) of DOM elements
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//task handler function that creates new list elements and appends them to the unordered-list element
var createTaskHandler = function(){
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
        listItemEl.textContent = "This is a new task";
        tasksToDoEl.appendChild(listItemEl);
};

 //add an event listener to buttonEl act on-click and create a new list element with textcontent/style, then append to parent "ul" element
 buttonEl.addEventListener("click", createTaskHandler);