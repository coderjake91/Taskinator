//select id(s) of DOM elements
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


//task handler function that creates new list elements and appends them to the unordered-list element, accepts event object as am argument
var createTaskHandler = function(event){

    //prevent browsers default behavior-i.e. refreshing upon form submission
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(listItemEl);
};

 //add an event listener to formEl, act upon submit and create a new list element with text content/style, then append to parent "ul" element
 formEl.addEventListener("submit", createTaskHandler);